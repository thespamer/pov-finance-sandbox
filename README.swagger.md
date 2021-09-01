
# Open Finance Project - Swagger API Specification

This document provides a Swagger API specification that includes key endpoints from the [Open Bank Project (OBP-API)](https://github.com/OpenBankProject/OBP-API) along with custom endpoints from your Open Finance project. The specification is written in YAML format and can be used to visualize, test, and document your API using tools like Swagger UI or Postman.

## Overview

The provided Swagger specification includes the following:

### 1. OBP-API Endpoints

- **/obp/v4.0.0/banks**: Retrieves a list of banks.
- **/obp/v4.0.0/banks/{bank_id}/accounts/{account_id}/balances**: Retrieves the balance of a specific account within a bank.

### 2. Custom Endpoints

- **/api/accounts/{accountNumber}/balance**: Retrieves the balance of an account in your Open Finance project.
- **/api/accounts/{accountNumber}/deposit**: Allows depositing a specified amount into an account.
- **/api/accounts/{accountNumber}/transactions**: Lists all transactions associated with a specific account.
- **/api/accounts/{accountNumber}/share**: Shares account information with another financial institution.
- **/api/accounts/{accountNumber}/revoke-share**: Revokes previously shared account information from a financial institution.

## Usage

### 1. Viewing the Specification

You can view and interact with the API specification by using tools like:

- **Swagger UI**: An open-source tool that allows you to visualize and interact with the API’s resources without having any of the implementation logic in place.
- **Postman**: A collaboration platform for API development that allows you to import the Swagger file and test the API endpoints.

### 2. Expanding the Specification

This Swagger file serves as a foundational document. You can expand it by adding more endpoints or refining the existing ones to include detailed request and response models, descriptions, and more.

### 3. Saving the Specification

Save the YAML content as `swagger.yaml` or any preferred filename. You can then import this file into Swagger UI, Postman, or any other API tool that supports Swagger/OpenAPI specifications.

### 4. Example Usage

#### Example: Viewing Banks

You can retrieve a list of banks using the following endpoint:

```yaml
/obp/v4.0.0/banks:
  get:
    summary: Get Banks
    description: Returns a list of all banks available.
    responses:
      '200':
        description: A list of banks.
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: string
                    example: gh.29.uk
                  short_name:
                    type: string
                    example: OBP Bank
                  full_name:
                    type: string
                    example: Open Bank Project Bank
                  logo:
                    type: string
                    example: http://example.com/logo.png
                  website:
                    type: string
                    example: http://example.com
```

You can test this endpoint by navigating to the specified URL in Swagger UI or by using Postman.

## Conclusion

The provided Swagger specification allows you to document and test both OBP-API and your custom API endpoints efficiently. It serves as a useful resource for developers and stakeholders involved in the Open Finance projects, ensuring that the API is well-documented, tested, and easy to use.


