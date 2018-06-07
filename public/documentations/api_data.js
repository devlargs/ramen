define({ "api": [
  {
    "type": "POST",
    "url": "/authenticate",
    "title": "Get Token",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Used for Authorization header on request</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Authentication",
    "name": "PostAuthenticate",
    "sampleRequest": [
      {
        "url": "http://localhost:1234/api/authenticate"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/putEntity/:table/:id",
    "title": "Delete Entity",
    "group": "Entities",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "table",
            "description": "<p>Specify database table/collection</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Specify id to be deleted</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Insert generated token here to validate request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Deleted object id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Entities",
    "name": "DeletePutentityTableId",
    "sampleRequest": [
      {
        "url": "http://localhost:1234/api/putEntity/:table/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/getEntity/:table/:id",
    "title": "Get Entity",
    "group": "Entities",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "table",
            "description": "<p>Specify database table/collection</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Pass it on /getEntity/:table/:id if you want to return specific data</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": true,
            "field": "filter",
            "description": "<p>Pass specific attributes to return filtered queries. e.g. { address: 'Makati'}</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": true,
            "field": "fields",
            "description": "<p>Pass this to return specific attributes that you only need. e.g. ['Name', 'Address'] returns [{Name: '', Address: ''}, ...{ and_so_on }] only</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Insert generated token here to validate request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": "<p>Length of the response</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "lists",
            "description": "<p>Response content</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Entities",
    "name": "GetGetentityTableId",
    "sampleRequest": [
      {
        "url": "http://localhost:1234/api/getEntity/:table/:id"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/postEntity/:table",
    "title": "Post Entity",
    "group": "Entities",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "table",
            "description": "<p>Specify database table/collection</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "formData",
            "description": "<p>All things to be added</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Insert generated token here to validate request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": "<p>Length of the response</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "lists",
            "description": "<p>Response content</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Entities",
    "name": "PostPostentityTable",
    "sampleRequest": [
      {
        "url": "http://localhost:1234/api/postEntity/:table"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/putEntity/:table/:id",
    "title": "Put Entity",
    "group": "Entities",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "table",
            "description": "<p>Specify database table/collection</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Specify id to be edited</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "formData",
            "description": "<p>Payload object that determines all fields to be edited</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Insert generated token here to validate request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": "<p>Length of the response</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "lists",
            "description": "<p>Response content</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Entities",
    "name": "PutPutentityTableId",
    "sampleRequest": [
      {
        "url": "http://localhost:1234/api/putEntity/:table/:id"
      }
    ]
  }
] });