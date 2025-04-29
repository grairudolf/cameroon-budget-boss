
import React from "react";
import { Language, getTranslation } from "@/utils/languageUtils";
import { Card, CardContent } from "@/components/ui/card";
import { Income, Expense } from "@/data/mockData";
import { ArrowUp, ArrowDown, DollarSign } from "lucide-react";

interface DashboardProps {
  language: Language;
  incomes: Income[];
  expenses: Expense[];
}

const Dashboard: React.FC<DashboardProps> = ({ language, incomes, expenses }) => {
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const balance = totalIncome - totalExpenses;

  const formatAmount = (amount: number): string => {
    return amount.toLocaleString('fr-FR');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-gradient-to-br from-cameroon-green/10 to-cameroon-green/5">
        <CardContent className="flex items-center p-6">
          <div className="bg-cameroon-green/20 p-3 rounded-full mr-4">
            <ArrowUp className="h-8 w-8 text-cameroon-green" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {getTranslation("income", language)}
            </p>
            <h3 className="text-2xl font-bold">
              {formatAmount(totalIncome)} FCFA
            </h3>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-cameroon-red/10 to-cameroon-red/5">
        <CardContent className="flex items-center p-6">
          <div className="bg-cameroon-red/20 p-3 rounded-full mr-4">
            <ArrowDown className="h-8 w-8 text-cameroon-red" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {getTranslation("expenses", language)}
            </p>
            <h3 className="text-2xl font-bold">
              {formatAmount(totalExpenses)} FCFA
            </h3>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-cameroon-yellow/10 to-cameroon-yellow/5">
        <CardContent className="flex items-center p-6">
          <div className="bg-cameroon-yellow/20 p-3 rounded-full mr-4">
            <DollarSign className="h-8 w-8 text-cameroon-yellow" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {getTranslation("balance", language)}
            </p>
            <h3 className="text-2xl font-bold">
              {formatAmount(balance)} FCFA
            </h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
