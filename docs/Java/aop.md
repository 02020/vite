## 3

### LogExecutionTime

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface LogExecutionTime {
}
```

### ExampleAspect 定义切点

```java
@Aspect
@Component
public class ExampleAspect {

  @Around("@annotation(com.baeldung.LogExecutionTime)")
  public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {

    final long start = System.currentTimeMillis();

    final Object proceed = joinPoint.proceed();

    final long executionTime = System.currentTimeMillis() - start;

    System.out.println(joinPoint.getSignature() + " executed in " + executionTime + "ms");

    return proceed;
  }
}
```

### 应用

```java
@Component
public class Service {

    @LogExecutionTime
    public void serve() throws InterruptedException {
        Thread.sleep(2000);
    }
}

```

## MethodInfo

### AccountOperation

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AccountOperation {
    String operation();
}
```

### 切面代码

```java
@Aspect
@Component
public class BankAccountAspect {

  @Before(value = "@annotation(com.baeldung.method.info.AccountOperation)")
  public void getAccountOperationInfo(JoinPoint joinPoint) {
    // Method Information
    MethodSignature signature = (MethodSignature) joinPoint.getSignature();

    System.out.println("full method description: " + signature.getMethod());

    System.out.println("method name: " + signature.getMethod().getName());

    System.out.println("declaring type: " + signature.getDeclaringType());

    // Method args
    System.out.println("Method args names:");
    Arrays.stream(signature.getParameterNames())
      .forEach(s -> System.out.println("arg name: " + s));

    System.out.println("Method args types:");
    Arrays.stream(signature.getParameterTypes())
      .forEach(s -> System.out.println("arg type: " + s));

    System.out.println("Method args values:");
    Arrays.stream(joinPoint.getArgs())
      .forEach(o -> System.out.println("arg value: " + o.toString()));

    // Additional Information
    System.out.println("returning type: " + signature.getReturnType());
    System.out.println("method modifier: " + Modifier.toString(signature.getModifiers()));
    Arrays.stream(signature.getExceptionTypes())
      .forEach(aClass -> System.out.println("exception type: " + aClass));

    // Method annotation
    Method method = signature.getMethod();
    AccountOperation accountOperation = method.getAnnotation(AccountOperation.class);
    System.out.println("Account operation annotation: " + accountOperation);
    System.out.println("Account operation value: " + accountOperation.operation());

  }
}
```

### 业务.BankAccountService

```java
@Component
public class BankAccountService {

  @AccountOperation(operation = "deposit")
  public void deposit(Account account, Double amount) {
    // 存
    account.setBalance(account.getBalance() + amount);
  }

  @AccountOperation(operation = "withdraw")
  public void withdraw(Account account, Double amount) throws WithdrawLimitException {
    // 提取
    if (amount > 500.0) {
      throw new WithdrawLimitException("Withdraw limit exceeded.");
    }

    account.setBalance(account.getBalance() - amount);

  }

  public double getBalance() {
    return RandomUtils.nextDouble();
  }

}
```

### 业务.调用

```java
@SpringBootTest
class BankAccountServiceIntegrationTest {

  private Account account;

  @BeforeEach
  public void setup() {
    account = new Account();
    account.setAccountNumber("12345");
    account.setBalance(2000.0);
  }

  @Autowired
  BankAccountService bankAccountService;

  @Test
  void withdraw() {
    bankAccountService.withdraw(account, 500.0);
  }

  @Test
  void deposit() {
    bankAccountService.deposit(account, 500.0);
  }
}
```

### 业务.实体

```java
public class Account {

  private String accountNumber;
  private double balance;

  public String getAccountNumber() {
    return accountNumber;
  }

  public void setAccountNumber(String accountNumber) {
    this.accountNumber = accountNumber;
  }

  public double getBalance() {
    return balance;
  }

  public void setBalance(double balance) {
    this.balance = balance;
  }

  @Override
  public String toString() {
    return "Account{" + "accountNumber='" + accountNumber + '\'' + ", balance=" + balance + '}';
  }
}

```
