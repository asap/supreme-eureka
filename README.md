# Doctor/Patient Portal

## Requirements
Build a simple, but well-crafted and appealing web application that allows doctors and patients to collect and share healthcare information:

Patients’ personal details, including:

* Name
* Age
* Email Address
* Mailing Address
* Phone Number

Functional Requirements

* Doctors and Patients sign in with username / password credentials
* The system recognizes the user as either a doctor or a patient
* Upon signing in, doctors see a listing of patients in the system.
* Doctors can also search for patients by name. ● When a doctor selects a patient:
* The patient’s personal details are displayed.
* Upon signing in, patients see an overview of their information in the system:
* Their personal details are displayed, able to be edited.

Technical Requirements

* a browser-based single page application that communicates via HTTP calls to an API to fetch and store data.
* Use React to implement your web application and Node.js for your API server. You’re welcome to use any additional libraries or technologies you like.
* No need to create a user registration process, feel free to seed accounts.
* All data must be persisted.

## Getting Started

To avoid any problems installing packages, I'd recommend installing the client and server separately.

* `npm run install:client`
* `npm run install:server`

Start the project

* `npm run dev`

## Usage

* Client will run on `http://localhost:3000`
* Server will run on `http://localhost:3001`

Doctor login:

```
drmccoy@ufp.gov
bones
```

Patient Login:

```
scotty@ufp.gov
morepower
```

## Potential Improvements

### Security
* To improve security, a token such as JWT should be used to authenticate every request to the server. This could be handled using a middleware like passport on the server side. With the current implementation, the api is essentially unprotected and a username/password combination is only used for the user experience.
* If we were to implement server-side authentication and authorization, we should build out a server-side log out function to terminate the user's session.
* Doctors and Patients could be set up with different sets of server-side access permissions. We are currently handling permissions only on the client-side.

### Architecture
* Versioning the API would help when developing new features without breaking  backwards compatability 
* If we needed more complex searching, we should implement search on the server-side to improve performance
* Adding Swagger for interactive documentation
* Splitting client and server code bases into different repos/projects would allow dev work to be independent of client and server
* An independent server could be dynamically allocated new resources to improve performance
* The client can be deployed as a static SPA running on an Amazon S3 bucket to reduce server load
* In future versions, I would use environment variables for configuring the server, rather than hardcoding urls and port numbers

### Performance
* Currently I am running certain ORM queries directly in the routes. Some of these common queries could be done through the ORM's hooks or associates to keep things DRY
* Caching patient records would reduce server and database load when frequent queries are made for patients.