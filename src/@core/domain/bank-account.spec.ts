import { BankAccount } from './bank-account';

describe('BankAccount Unit Tests', () => {
  it('should create a bank account', () => {
    const bankAccount = new BankAccount(
      { balance: 100, account_number: '12345' },
      '123',
    );
    expect(bankAccount.id).toBe('123');
    expect(bankAccount.balance).toBe(100);
    expect(bankAccount.account_number).toBe('12345');
  });

  it('should debit from the bank account', () => {
    const bankAccount = new BankAccount(
      { balance: 100, account_number: '12345' },
      '123',
    );
    bankAccount.debit(100);
    expect(bankAccount.balance).toBe(0);
  });

  it('should credit to the bank account', () => {
    const bankAccount = new BankAccount(
      { balance: 100, account_number: '12345' },
      '123',
    );
    bankAccount.credit(100);
    expect(bankAccount.balance).toBe(200);
  });
});
