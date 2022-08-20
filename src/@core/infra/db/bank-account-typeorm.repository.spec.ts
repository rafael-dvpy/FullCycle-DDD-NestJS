import { BankAccount } from '../../domain/bank-account';
import { DataSource, Repository } from 'typeorm';
import { BankAccountTypeOrmRepository } from './bank-account-typeorm.repository';
import { BankAccountSchema } from './bank-account.schema';

describe('BankAccountTypeOrmRepository Test', () => {
  let dataSource: DataSource;
  let ormRepo: Repository<BankAccountSchema>;
  let repository: BankAccountTypeOrmRepository;

  beforeEach(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: true,
      entities: [BankAccountSchema],
    });
    await dataSource.initialize();
    ormRepo = dataSource.getRepository(BankAccountSchema);
    repository = new BankAccountTypeOrmRepository(ormRepo);
  });

  it('should insert a new bank account', async () => {
    const bankAccount = new BankAccount(
      { account_number: '1111-11', balance: 100 },
      '123',
    );
    await repository.insert(bankAccount);
    const model = await ormRepo.findOneBy({ account_number: '1111-11' });
    expect(model.id).toBe('123');
    expect(model.balance).toBe(100);
    expect(model.account_number).toBe('1111-11');
  });
});
