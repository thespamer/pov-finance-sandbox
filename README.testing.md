
# Open Finance Project - Testing Guide

This guide provides examples of how to test the core functionalities of this Open Finance project called povfinance, including checking balance, processing payments, listing transactions, and sharing information with another payment institution.

## 1. Checking Balance

**Test Request:**
```bash
curl -X GET http://localhost:8080/api/accounts/123456/balance
```

**Expected Output:**
```json
{
  "balance": 1000.0
}
```

## 2. Processing a Payment (Deposit)

**Test Request:**
```bash
curl -X POST "http://localhost:8080/api/accounts/123456/deposit?amount=500"
```

**Expected Output:**
```json
{
  "id": 1,
  "accountNumber": "123456",
  "balance": 1500.0
}
```

## 3. Listing Transactions

**Test Request:**
```bash
curl -X GET http://localhost:8080/api/accounts/123456/transactions
```

**Expected Output:**
```json
[
  {
    "transactionId": 1,
    "type": "DEPOSIT",
    "amount": 500.0,
    "date": "2024-08-31T12:34:56",
    "accountNumber": "123456"
  },
  {
    "transactionId": 2,
    "type": "WITHDRAWAL",
    "amount": 200.0,
    "date": "2024-08-31T14:00:00",
    "accountNumber": "123456"
  }
]
```

## 4. Sharing Information with Another Payment Institution

**Test Request:**
```bash
curl -X POST http://localhost:8080/api/accounts/123456/share \
  -H "Content-Type: application/json" \
  -d '{"institutionId": "789012", "permissions": ["BALANCE", "TRANSACTIONS"]}'
```

**Expected Output:**
```json
{
  "status": "success",
  "message": "Information shared with institution 789012"
}
```

## 5. Processing a Payment (Transfer to Another Account)

**Test Request:**
```bash
curl -X POST "http://localhost:8080/api/accounts/123456/transfer?targetAccount=654321&amount=300"
```

**Expected Output:**
```json
{
  "transactionId": 3,
  "sourceAccount": "123456",
  "targetAccount": "654321",
  "amount": 300.0,
  "date": "2024-08-31T15:00:00",
  "status": "COMPLETED"
}
```

## 6. Verifying the Updated Balance after Transfer

**Test Request:**
```bash
curl -X GET http://localhost:8080/api/accounts/123456/balance
```

**Expected Output:**
```json
{
  "balance": 1200.0
}
```

## 7. Checking Balance of the Target Account

**Test Request:**
```bash
curl -X GET http://localhost:8080/api/accounts/654321/balance
```

**Expected Output:**
```json
{
  "balance": 2300.0
}
```

## 8. Listing All Shared Information

**Test Request:**
```bash
curl -X GET http://localhost:8080/api/accounts/123456/shared-info
```

**Expected Output:**
```json
[
  {
    "institutionId": "789012",
    "permissions": ["BALANCE", "TRANSACTIONS"],
    "dateShared": "2024-08-31T12:00:00"
  }
]
```

## 9. Revoking Shared Information

**Test Request:**
```bash
curl -X DELETE http://localhost:8080/api/accounts/123456/revoke-share \
  -H "Content-Type: application/json" \
  -d '{"institutionId": "789012"}'
```

**Expected Output:**
```json
{
  "status": "success",
  "message": "Information sharing revoked for institution 789012"
}
```

These test cases should give you a solid foundation for verifying the core functionalities of this Open Finance sandbox project.
