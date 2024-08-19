import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transaction } from './transaction.entity';


@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async addTransaction(transaction: Transaction): Promise<Transaction> {
    return this.transactionsRepository.save(transaction);
  }

  async getTransactions(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }

  async getTransactionById(id: number): Promise<Transaction> {
    return this.transactionsRepository.findOneBy({ id });
  }

  async updateTransaction(id: number, updatedTransaction: Partial<Transaction>): Promise<Transaction> {
    await this.transactionsRepository.update(id, updatedTransaction);
    return this.transactionsRepository.findOneBy({ id });
  }

  async deleteTransaction(id: number): Promise<void> {
    await this.transactionsRepository.delete(id);
  }

  async getBudgetSummary() {
    const transactions = await this.getTransactions();

    const totalRevenue = transactions
      .filter(t => t.type === 'revenue')
      .reduce((sum, t) => sum + parseFloat(t.somme.toString()), 0);

    const totalExpense = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + parseFloat(t.somme.toString()), 0);

    return {
      totalRevenue,
      totalExpense,
      remainingBudget: totalRevenue - totalExpense,
    };
  }
}
