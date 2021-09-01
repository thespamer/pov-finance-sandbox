# My Open Finance Project
This is a simple Open Finance project that demonstrates the implementation of a basic banking service with balance inquiry, deposits, and account management.

## Backend
The backend is built using Spring Boot and connects to a PostgreSQL database. It exposes RESTful APIs to interact with accounts.

### How to Run
1. Make sure Docker and Docker Compose are installed.
2. Run `docker-compose up` to start the PostgreSQL database.
3. Populate the database using the script in `scripts/populate_db.sql`.
4. Run the Spring Boot application from the `backend` directory.
5. Use the provided scripts or Postman to test the APIs.

## Frontend
The frontend is a simple React application that interacts with the backend APIs.

### How to Run
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the application.

## Testing
Scripts are provided in the `scripts` directory to test the API endpoints using curl.

## READMES

1. [README_en.md](https://github.com/thespamer/povfinance/blob/main/README_en.md) , describes structure and how to bring up the project to life.
2. [README.OBP-API.md](https://github.com/thespamer/povfinance/blob/main/README.OBP-API.md), explain how to integrate with OBP-API sandbox and perform some tests.
3. [README.testing.md](https://github.com/thespamer/povfinance/blob/main/README.testing.md), simple smoke tests to validate the backend without integration with OPB-API sandbox.
4. [README.swagger.md](https://github.com/thespamer/povfinance/blob/main/README.swagger.md), specify the endpoint API structure of this project and OPB-API endpoints.
