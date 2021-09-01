@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public Account getAccountByNumber(String accountNumber) {
        return accountRepository.findByAccountNumber(accountNumber);
    }

    public Account deposit(String accountNumber, Double amount) {
        Account account = getAccountByNumber(accountNumber);
        account.setBalance(account.getBalance() + amount);
        return accountRepository.save(account);
    }
}