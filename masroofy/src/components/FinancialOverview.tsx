import { Card } from "@/components/ui/card";
import { ArrowUpCircle, ArrowDownCircle, PiggyBank } from "lucide-react";

interface OverviewProps {
  totalIncome: number;
  totalExpenses: number;
}

export const FinancialOverview = ({ totalIncome, totalExpenses }: OverviewProps) => {
  const balance = totalIncome - totalExpenses;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-6 flex items-center justify-between bg-green-50">
        <div>
          <p className="text-sm font-medium text-gray-600">Total Income</p>
          <p className="text-2xl font-bold text-green-600">{totalIncome.toFixed(2)} DZD</p>
        </div>
        <ArrowUpCircle className="h-8 w-8 text-green-500" />
      </Card>

      <Card className="p-6 flex items-center justify-between bg-red-50">
        <div>
          <p className="text-sm font-medium text-gray-600">Total Expenses</p>
          <p className="text-2xl font-bold text-red-600">{totalExpenses.toFixed(2)} DZD</p>
        </div>
        <ArrowDownCircle className="h-8 w-8 text-red-500" />
      </Card>

      <Card className="p-6 flex items-center justify-between bg-blue-50">
        <div>
          <p className="text-sm font-medium text-gray-600">Balance</p>
          <p className="text-2xl font-bold text-blue-600">{balance.toFixed(2)} DZD</p>
        </div>
        <PiggyBank className="h-8 w-8 text-blue-500" />
      </Card>
    </div>
  );
};