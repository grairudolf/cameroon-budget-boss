
import React, { useState } from "react";
import { Language, getTranslation } from "@/utils/languageUtils";
import { ExpenseCategory } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExpenseFormProps {
  language: Language;
  onAddExpense?: (expense: {
    category: ExpenseCategory;
    amount: number;
    date: string;
    description: string;
  }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ language, onAddExpense }) => {
  const [category, setCategory] = useState<ExpenseCategory>('food');
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddExpense && amount && date) {
      onAddExpense({
        category,
        amount: parseFloat(amount),
        date,
        description
      });
      // Reset form
      setCategory('food');
      setAmount("");
      setDate(new Date().toISOString().split('T')[0]);
      setDescription("");
    }
  };

  const expenseCategories: ExpenseCategory[] = [
    'food', 
    'transport', 
    'airtime', 
    'offering', 
    'rent', 
    'utilities', 
    'education', 
    'entertainment', 
    'other'
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          {getTranslation("addExpense", language)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              {getTranslation("category", language)}:
            </label>
            <Select 
              value={category} 
              onValueChange={(value) => setCategory(value as ExpenseCategory)}
            >
              <SelectTrigger>
                <SelectValue placeholder={getTranslation("category", language)} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {expenseCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {getTranslation(cat, language)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium">
              {getTranslation("amount", language)} (FCFA):
            </label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium">
              {getTranslation("date", language)}:
            </label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              {getTranslation("description", language)}:
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={getTranslation("description", language)}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full">
            {getTranslation("save", language)}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ExpenseForm;
