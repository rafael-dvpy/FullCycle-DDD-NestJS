import { BankAccount } from '../../domain/bank-account';
import { Repository } from 'typeorm';
import { BankAccountRepository } from '../../domain/bank-account.repository';
import { BankAccountSchema } from './bank-account.schema';

export class BankAccountTypeOrmRepository implements BankAccountRepository {
  constructor(private ormRepo: Repository<BankAccountSchema>) {}

  async insert(bankAccount: BankAccount): Promise<void> {
    const model = this.ormRepo.create(bankAccount);
    await this.ormRepo.insert(model);
  }

  async findByAccountNumber(account_number: string): Promise<BankAccount> {
    const model = await this.ormRepo.findOneBy({ account_number });
    return new BankAccount(
      { account_number: model.account_number, balance: model.balance },
      model.id,
    );
  }

  async update(bankAccount: BankAccount): Promise<void> {
    await this.ormRepo.update(bankAccount.id, {
      balance: bankAccount.balance,
    });
  }

  async findAllAccounts(): Promise<BankAccount[]> {
    const accounts = await this.ormRepo.find();
    const result = await accounts.map(
      (account) =>
        new BankAccount(
          { account_number: account.account_number, balance: account.balance },
          account.id,
        ),
    );
    console.log(result);
    return result;
  }

  async findById(id: string): Promise<BankAccount> {
    const account = await this.ormRepo.findOneBy({ id });
    const result = new BankAccount(
      { account_number: account.account_number, balance: account.balance },
      account.id,
    );
    return result;
  }
}
