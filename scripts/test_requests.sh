#!/bin/bash

# Test to check balance
curl -X GET http://localhost:8080/api/accounts/123456/balance

# Test to make a deposit
curl -X POST "http://localhost:8080/api/accounts/123456/deposit?amount=100"