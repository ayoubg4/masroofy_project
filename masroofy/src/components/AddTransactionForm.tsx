import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

interface AddTransactionFormProps {
  onAddTransaction: (transaction: Transaction) => void;
}

export const AddTransactionForm = ({ onAddTransaction }: AddTransactionFormProps) => {
  const { toast } = useToast();
  const [transactionType, setTransactionType] = useState<"income" | "expense">("expense");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const transaction: Transaction = {
      id: Date.now().toString(),
      name: formData.get("name") as string,
      amount: Number(formData.get("amount")),
      type: transactionType,
      category: formData.get("category") as string,
      date: formData.get("date") as string,
      notes: formData.get("notes") as string,
    };

    onAddTransaction(transaction);
    toast({
      title: "Success",
      description: "Transaction added successfully",
    });
    e.currentTarget.reset();
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4 mb-4">
          <Button
            type="button"
            variant={transactionType === "income" ? "default" : "outline"}
            onClick={() => setTransactionType("income")}
            className="w-full"
          >
            Income
          </Button>
          <Button
            type="button"
            variant={transactionType === "expense" ? "default" : "outline"}
            onClick={() => setTransactionType("expense")}
            className="w-full"
          >
            Expense
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Transaction Name</Label>
          <Input id="name" name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount (DZD)</Label>
          <Input id="amount" name="amount" type="number" min="0" step="0.01" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select name="category" required>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="groceries">Groceries</SelectItem>
              <SelectItem value="transportation">Transportation</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="utilities">Utilities</SelectItem>
              <SelectItem value="salary">Salary</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" type="date" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notes (Optional)</Label>
          <Input id="notes" name="notes" />
        </div>

        <Button type="submit" className="w-full">
          Add Transaction
        </Button>
      </form>
    </Card>
  );
};