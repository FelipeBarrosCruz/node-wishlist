define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "CREATE",
    "description": "<p>Create an user</p>",
    "name": "CREATE",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "Body\n{\n  \"name\":     \"Felipe Barros\"\n  \"email\":    \"felipe.barros.pt@gmail.com\",\n  \"password\": \"foobar\",\n  \"address\":  01311300\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": false,\n  \"message\": \"MESSAGE_USER_CREATE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n     \"status\": true,\n     \"data\": {\n         \"id\": 1,\n         \"name\":  \"Felipe Barros\",\n         \"email\": \"felipe.barros.pt@gmail.com\"\n         \"address\": {\n             \"cep\": \"01311300\",\n             \"tipoDeLogradouro\": \"Avenida\",\n             \"logradouro\": \"Paulista\",\n             \"bairro\": \"Bela Vista\",\n             \"cidade\": \"São Paulo\",\n             \"estado\": \"SP\"\n         }\n     },\n     \"token\": \"JsonWebToken\",\n     \"message\": \"MESSAGE_USER_CREATE_SUCCESS\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/components/users/route/create.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users",
    "title": "DELETE",
    "description": "<p>Delete an user</p>",
    "name": "DELETE",
    "group": "Users",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": false,\n  \"message\": \"MESSAGE_USER_DELETE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 OK\n{\n     \"status\": true,\n     \"message\": \"MESSAGE_USER_DELETE_SUCCESS\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/components/users/route/delete.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "SELECT",
    "description": "<p>Select an user</p>",
    "name": "SELECT",
    "group": "Users",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": false,\n  \"message\": \"MESSAGE_USER_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": true,\n     \"data\": {\n         \"id\": 1,\n         \"name\":  \"Felipe Barros\",\n         \"email\": \"felipe.barros.pt@gmail.com\",\n         \"address\": {\n             \"number\": 1,\n             \"country\": \"BR\",\n             \"state\": \"PI\",\n             \"city\": \"Teresina\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/components/users/route/select.js",
    "groupTitle": "Users"
  },
  {
    "type": "update",
    "url": "/users",
    "title": "UPDATE",
    "description": "<p>Update an user</p>",
    "name": "UPDATE",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "Body\n{\n  \"name\":     \"Felipe Barros\",\n  \"password\": \"foobar\",\n  \"address\":  01311300\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": false,\n  \"message\": \"MESSAGE_USER_UPDATE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": true,\n     \"data\": {\n         \"id\": 1,\n         \"name\":  \"Felipe Barros\",\n         \"email\": \"felipe.barros.pt@gmail.com\",\n         \"address\": {\n             \"cep\": \"01311300\",\n             \"tipoDeLogradouro\": \"Avenida\",\n             \"logradouro\": \"Paulista\",\n             \"bairro\": \"Bela Vista\",\n             \"cidade\": \"São Paulo\",\n             \"estado\": \"SP\"\n         }\n     },\n     \"message\": \"MESSAGE_USER_UPDATE_SUCCESS\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/components/users/route/update.js",
    "groupTitle": "Users"
  }
] });
