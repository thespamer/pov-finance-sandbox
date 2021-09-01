
# Open Finance Project - Integration with OBP-API

This guide provides detailed instructions on how to integrate your Open Finance project with the [Open Bank Project (OBP-API)](https://github.com/OpenBankProject/OBP-API). It covers configuration, running examples, and detailed test cases to ensure the integration is working correctly.

## 1. Setting Up the OBP-API

### 1.1 Cloning and Setting Up the OBP-API Repository

Start by cloning the OBP-API repository:

```bash
git clone https://github.com/OpenBankProject/OBP-API.git
cd OBP-API
```

### 1.2 Running OBP-API Locally

OBP-API can be run locally using Docker or directly on your machine. Here’s how you can run it using Docker:

```bash
docker pull openbankproject/obp-api
docker run -d -p 8080:8080 openbankproject/obp-api
```

### 1.3 Configuration

Ensure the OBP-API is running on `http://localhost:8080`. You can configure your Open Finance project to communicate with this API by updating the configuration file (e.g., `application.properties`) in your backend:

```properties
obp.api.url=http://localhost:8080
```

## 2. Connecting to OBP-API

### 2.1 Authentication

OBP-API requires authentication to interact with its endpoints. Typically, you would need to:

1. Register an application on the OBP-API instance to get your `consumer_key`.
2. Use OAuth1.0a or Direct Login to authenticate.

**Example of Direct Login:**

```bash
curl -X POST http://localhost:8080/my/logins/direct   -H "Content-Type: application/json"   -d '{
        "username": "your_username",
        "password": "your_password",
        "consumer_key": "your_consumer_key"
      }'
```

This will return a `token` that you can use to authenticate subsequent requests.

### 2.2 Example Requests

Once authenticated, you can start interacting with OBP-API endpoints. Below are a few examples:

**Getting Bank Information:**

```bash
curl -X GET http://localhost:8080/obp/v4.0.0/banks   -H "Authorization: DirectLogin token=your_token"
```

**Getting Account Balance:**

```bash
curl -X GET http://localhost:8080/obp/v4.0.0/banks/{bank_id}/accounts/{account_id}/balances   -H "Authorization: DirectLogin token=your_token"
```

## 3. Detailed Tests with OBP-API

OBP-API provides a comprehensive suite of tests that you can run to verify your integration. Below is a detailed walkthrough based on the [OBP-API Testing Guide](https://github.com/OpenBankProject/OBP-API#run-some-tests).

### 3.1 Running Tests Locally

To run tests for OBP-API:

1. Ensure OBP-API is running locally.
2. Navigate to the OBP-API project directory.
3. Execute the following command to run a single test:

```bash
mvn -DwildcardSuites=code.api.directloginTest test
```

4. To run all tests and save the output:

```bash
export MAVEN_OPTS="-Xss128m" && mvn clean test | tee obp-api-test-results.txt
```

### 3.2 Customizing Tests

You can customize the tests by modifying the properties in the `test.default.props` file located in the `src/main/resources/props` directory.

### 3.3 Example Test Cases

**Test Case: Verify Bank List Endpoint**

- **Objective**: Ensure the `/banks` endpoint returns a list of banks.
- **Expected Output**: JSON array containing bank information.

**Test Command:**

```bash
curl -X GET http://localhost:8080/obp/v4.0.0/banks   -H "Authorization: DirectLogin token=your_token"
```

**Expected Output:**

```json
[
  {
    "id": "gh.29.uk",
    "short_name": "OBP Bank",
    "full_name": "Open Bank Project Bank",
    "logo": "http://example.com/logo.png",
    "website": "http://example.com"
  }
  // Additional banks...
]
```

**Test Case: Verify Account Balance Endpoint**

- **Objective**: Ensure the `/balances` endpoint returns the correct balance for an account.
- **Expected Output**: JSON object containing account balance.

**Test Command:**

```bash
curl -X GET http://localhost:8080/obp/v4.0.0/banks/{bank_id}/accounts/{account_id}/balances   -H "Authorization: DirectLogin token=your_token"
```

**Expected Output:**

```json
{
  "currency": "EUR",
  "amount": "1234.56"
}
```

### 3.4 Advanced Testing Scenarios

- **Simulating Multiple Users**: Create multiple users and simulate different scenarios like account creation, transactions, and balance checks.
- **Error Handling**: Test how your integration handles errors, such as invalid tokens or unauthorized access.

## 4. Conclusion

Integrating with the OBP-API enhances your Open Finance project by providing access to a wide range of banking functionalities. By following the steps and tests outlined in this guide, you can ensure a robust and reliable integration with the OBP-API.

