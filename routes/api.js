var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var { getCollections } = require('../models/database');

var api = require('../models/api');
var { decrypt, encrypt } = require('../models/functions');
var { encryptionPassword, secretKey } = require('../config');

var generateToken = (payload) => {
    return encrypt(jwt.sign({
        dateCreated: new Date().toString(),
        exp: Math.floor(Date.now()),
        ...payload
    }, secretKey));
}

router.get('/', function (req, res, next) {
    res.send('<h1>API IS UP</h1>')
});

router.post('/authenticate', function (req, res, next) {
    if (!req.body.email) {
        res.send({ message: 'email is not defined', status: 403 })
    } else if (!req.body.password) {
        res.send({ message: 'password is not defined', status: 403 })
    } else {
        api.Get({ table: 'users' }, {
            email: req.body.email
        }).then(function (response) {
            if (response.lists.length) {
                bcrypt.compare(req.body.password, response.lists[0].password, function (err, correct) {
                    if (correct) {
                        res.send({
                            token: generateToken({ userId: response.lists[0]._id }),
                            message: 'Successfully authenticated.',
                            status: 200
                        })
                    } else {
                        res.send({ message: 'Incorrect password.', status: 403 });
                    }
                });
            } else {
                res.send({ message: 'Invalid username', status: 400 });
            }
        })
    }
});

router.use(function (req, res, next) {
    var token = req.headers.authorization || req.query.token;
    if (token) {
        jwt.verify(decrypt(token), secretKey, function (err, decoded) {
            if (err) {
                res.send({
                    status: 412,
                    message: 'Failed to authenticate token.'
                });
            } else {
                getCollections(coll => {
                    req.collections = coll;
                    req.userId = decoded.userId;
                    next();
                });
            }
        });
    } else {
        res.send({
            status: 403,
            message: 'No token provided.'
        });
    }
});

router.get('/getEntity/:table', function (req, res, next) {
    if (req.params.table) {
        if (req.collections.includes(req.params.table)) {
            api.Get({
                table: req.params.table,
                ...req.query
            }).then((response) => {
                res.send({ ...response })
            }).catch((err) => {
                res.send({ ...err })
            });
        } else {
            res.send({
                message: 'Table not found.',
                status: 404
            })
        }
    } else {
        res.send({
            message: 'Please enter table.',
            status: 404
        })
    }
});

router.get('/getEntity/:table/:id', function (req, res, next) {
    if (req.params.table) {
        if (req.collections.includes(req.params.table)) {
            api.Get({
                table: req.params.table,
                id: req.params.id,
                ...req.query
            }).then((response) => {
                res.send({ ...response })
            }).catch((err) => {
                res.send({ ...err })
            });
        } else {
            res.send({
                message: 'Table not found.',
                status: 404
            })
        }
    } else {
        res.send({
            message: 'Please enter table.',
            status: 404
        })
    }
});

router.post('/postEntity/:table', function (req, res, next) {
    api.Post({
        table: req.params.table,
        formData: req.body
    }).then(response => {
        res.send({
            ...response,
            newToken: generateToken({ userId: req.userId })
        })
    }).catch(ex => {
        res.send({ ...ex })
    })
});

router.put('/putEntity/:table/:id', function (req, res, next) {
    api.Put({
        ...req.params,
        newData: req.body
    }).then(function (response) {
        res.send({
            ...response,
            newToken: generateToken({ userId: req.userId })
        })
    }).catch(function (ex) {
        res.send({ ...ex })
    })
});

router.delete('/deleteEntity/:table/:id', function (req, res, next) {
    api.Delete({
        ...req.params
    }).then(function (response) {
        res.send({
            ...response,
            newToken: generateToken({ userId: req.userId })
        })
    }).catch(function (ex) {
        res.send({ ...ex })
    })
})

module.exports = router;