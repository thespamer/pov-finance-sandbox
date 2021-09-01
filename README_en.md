
# Open Finance Project

This is a simple Open Finance project that demonstrates the implementation of a basic banking service with balance inquiries, deposits, and account management between institutions using OBP-API sandbox.

## Project Structure

```
open-finance-project/
├── backend/
│   ├── src/
│   ├── pom.xml
│   ├── application.properties
├── frontend/
│   ├── src/
│   ├── package.json
├── scripts/
│   ├── populate_db.sql
│   ├── test_requests.sh
├── docker-compose.yml
├── README.md
```

## Backend

The backend is built using Spring Boot and connects to a PostgreSQL database. It exposes RESTful APIs to interact with bank accounts.

### Setup

1. **Dependencies Installation**:
   - Ensure you have [Java 11+](https://adoptopenjdk.net/) and [Maven](https://maven.apache.org/) installed.
   - Navigate to the `backend` directory and run the following command:

     ```bash
     mvn clean install
     ```

2. **Database Configuration**:
   - The project uses PostgreSQL. The database configuration is defined in the `backend/src/main/resources/application.properties` file.
   - The default credentials are:
     - `spring.datasource.url=jdbc:postgresql://localhost:5432/open_finance_db`
     - `spring.datasource.username=postgres`
     - `spring.datasource.password=yourpassword`
   - Make sure to adjust the credentials as necessary.

3. **Docker**:
   - Use Docker Compose to set up and start the PostgreSQL database:

     ```bash
     docker-compose up -d
     ```

4. **Populate the Database**:
   - After starting the database, populate it with initial data using the script:

     ```bash
     docker exec -i <container_id> psql -U postgres -d open_finance_db < scripts/populate_db.sql
     ```

5. **Running the Backend**:
   - To start the Spring Boot application, navigate to the `backend` directory and run:

     ```bash
     mvn spring-boot:run
     ```

## Frontend

The frontend is a simple React application that interacts with the backend APIs.

### Setup and Run

1. **Dependencies Installation**:
   - Ensure you have [Node.js](https://nodejs.org/) installed.
   - Navigate to the `frontend` directory and run:

     ```bash
     npm install
     ```

2. **Running the Frontend**:
   - To start the frontend, run:

     ```bash
     npm start
     ```

   - The application will be accessible at `http://localhost:3000`.

## Testing

Scripts are available in the `scripts` directory to test the API endpoints using `curl`.

### Testing with Curl

1. **Check Balance**:

   ```bash
   curl -X GET http://localhost:8080/api/accounts/123456/balance
   ```

2. **Make a Deposit**:

   ```bash
   curl -X POST "http://localhost:8080/api/accounts/123456/deposit?amount=100"
   ```

### Testing with Postman

- You can also import the APIs into Postman and perform manual or automated testing.
- Configure environment variables in Postman to test different accounts or institutions.

## Using Sandbox

This project can be integrated with sandbox APIs, such as those available in the [Open Bank Project](https://github.com/OpenBankProject/OBP-API). To do this, configure the credentials and endpoints in the `application.properties` file or as environment variables.

## Documentation

- Full API documentation can be automatically generated with Swagger or Postman, making integration and testing easier.
- Refer to the source code for more details on each endpoint.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
