import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BankAccountsModule],
})
export class AppModule {}
