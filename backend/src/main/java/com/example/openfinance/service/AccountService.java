package com.example.openfinance.service;

import com.example.openfinance.model.Account;
import com.example.openfinance.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account getAccountByNumber(String accountNumber) {
        return accountRepository.findByAccountNumber(accountNumber);
    }

    public Account deposit(String accountNumber, Double amount) {
        Account account = getAccountByNumber(accountNumber);

        // Convert the amount to BigDecimal and add it to the existing balance
        BigDecimal depositAmount = BigDecimal.valueOf(amount);
        account.setBalance(account.getBalance().add(depositAmount));

        return accountRepository.save(account);
    }
}
