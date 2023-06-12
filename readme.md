Internship Management System API Documentation
==============================================

Introduction
------------
The Internship Management System API provides endpoints for managing colleges and interns participating in an internship program. It allows creating colleges, adding interns, and retrieving information about colleges and their interns.

Base URL
--------
The base URL for all endpoints is: `BASE_URL/functionup`

College Model
-------------
The College Model represents a college participating in the internship program.

Attributes:
- `name` (string): Unique identifier for the college.
- `fullName` (string): Full name of the college.
- `logoLink` (string): URL of the college's logo.
- `isDeleted` (boolean): Indicates whether the college is deleted.

Intern Model
------------
The Intern Model represents an intern who applies for an internship program.

Attributes:
- `name` (string): Name of the intern.
- `email` (string): Valid email address of the intern.
- `mobile` (string): Valid mobile number of the intern.
- `collegeId` (ObjectId): Reference to the College Model. Represents the college to which the intern belongs.
- `isDeleted` (boolean): Indicates whether the intern is deleted.

API Endpoints
-------------

1. Create a College
-------------------
Create a document for each member of the group.

- Endpoint: `POST /colleges`
- Request Body:
  ```
  {
    "name": "iith",
    "fullName": "Indian Institute of Technology, Hyderabad",
    "logoLink": "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png"
  }
  ```
- Response (Successful):
  ```
  {
    "status": true,
    "data": {
      "name": "iith",
      "fullName": "Indian Institute of Technology, Hyderabad",
      "logoLink": "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png",
      "isDeleted": false
    }
  }
  ```

2. Create an Intern
-------------------
Create a document for an intern and save the collegeId along with it.

- Endpoint: `POST /interns`
- Request Body:
  ```
  {
    "name": "Jane Does",
    "email": "jane.doe@iith.in",
    "mobile": "90000900000",
    "collegeName": "iith"
  }
  ```
- Response (Successful):
  ```
  {
    "status": true,
    "data": {
      "isDeleted": false,
      "name": "Jane Does",
      "email": "jane.doe@iith.in",
      "mobile": "90000900000",
      "collegeId": "ObjectId"
    }
  }
  ```

3. Get College Details
----------------------
Returns the college details for the requested college.

- Endpoint: `GET /collegeDetails?collegeName=iith`
- Response (Successful):
  ```
  {
    "status": true,
    "data": {
      "name": "iith",
      "fullName": "Indian Institute of Technology, Hyderabad",
      "logoLink": "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png",
      "interns": [
        {
          "_id": "123a47301a53ecaeea02be59",
          "name": "Jane Doe",
          "email": "jane.doe@miet.ac.in",
          "mobile": "8888888888"
        },
        {
          "_id": "45692c0e1a53ecaeea02b1ac",
          "name": "John Doe",
          "email": "john.doe@miet.ac.in",
          "mobile": "9999999999"
        },
        ...
      ]
    }
  }
  ```

Testing
-------
To test these APIs, create a new collection in Postman named "Project 2 Internship" and add a new request for each API endpoint. Each request in the collection should be named appropriately. Make sure all team members have their tests in a running state.

Conclusion
----------
This API documentation provides details about the Internship Management System. It includes information about the API endpoints, request/response structures, and sample requests/responses. Use this documentation as a reference to interact with the API effectively.

