## Getting started

Install JSON Server

```
npm install json-server
```

Go to
```
./src/db.json
```
and insert dome data
```json
{
  "employees": [
    {
      "id": 1,
      "first_name": "Sebastian",
      "last_name": "Eschweiler",
      "email": "sebastian@codingthesmartway.com"
    },
    {
      "id": 2,
      "first_name": "Steve",
      "last_name": "Palmer",
      "email": "steve@codingthesmartway.com"
    },
    {
      "id": 3,
      "first_name": "Ann",
      "last_name": "Smith",
      "email": "ann@codingthesmartway.com"
    }
  ]
}
```

Start JSON Server

```bash
npm run mock:api
```
Now if you go to [http://localhost:4000/employees/1](http://localhost:4000/employees/1), you'll get

```json
{
  "id": 1,
  "first_name": "Sebastian",
  "last_name": "Eschweiler",
  "email": "sebastian@codingthesmartway.com"
}
```
OR if you go to [http://localhost:4000/](http://localhost:4000/), you'll get all available paths

### Resources
which will contain all paths:
```
/employees
```
The following HTTP endpoints are created automatically by JSON server:
```
GET    /employees
GET    /employees/{id}
POST   /employees
PUT    /employees/{id}
PATCH  /employees/{id}
DELETE /employees/{id}
```
It's possible to extend URLs with further parameter. E.g. you can apply filtering by using URL parameters like you can see in the following:

```
http://localhost:4000/employees?first_name=Sebastian
```

This returns just one employee object as a result.
For a full list of available URL parameters take a look at the JSON server documentation: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to db.json. A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data.

### Testing API Endpoints With POSTman
Initiating a GET request is easy by simply using the browser. For initiating other types of HTTP requests you can make use of an HTTP client tool like Postman [https://www.getpostman.com](https://www.getpostman.com). Postman is available for MacOS, Windows and Linux.
