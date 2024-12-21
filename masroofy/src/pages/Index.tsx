import { useState } from "react";
import { Header } from "@/components/Header";
import { FinancialOverview } from "@/components/FinancialOverview";
import { AddTransactionForm } from "@/components/AddTransactionForm";
import { TransactionList } from "@/components/TransactionList";
import { VisualReports } from "@/components/VisualReports";
import { useToast } from "@/components/ui/use-toast";

interface Transaction {
  id: string;
  name: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
  notes?: string;
}

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { toast } = useToast();

  const addTransaction = (transaction: Transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
    toast({
      title: "Success",
      description: "Transaction deleted successfully",
    });
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8 px-4 space-y-8">
        <FinancialOverview
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />
        
        <div className="grid gap-8 md:grid-cols-2">
          <AddTransactionForm onAddTransaction={addTransaction} />
          <TransactionList
            transactions={transactions}
            onDeleteTransaction={deleteTransaction}
          />
        </div>
        
        <VisualReports transactions={transactions} />
      </main>
    </div>
  );
};

export default Index;