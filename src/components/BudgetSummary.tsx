
import React from "react";
import { Language, getTranslation } from "@/utils/languageUtils";
import { BudgetCategory } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface BudgetSummaryProps {
  language: Language;
  budgetData: BudgetCategory[];
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ language, budgetData }) => {
  const formatAmount = (amount: number): string => {
    return amount.toLocaleString('fr-FR');
  };

  const getBudgetStatus = (category: BudgetCategory): string => {
    const percentUsed = (category.spent / category.budgeted) * 100;
    if (percentUsed < 70) return "budget-safe";
    if (percentUsed < 90) return "budget-caution";
    return "budget-danger";
  };

  const totalBudgeted = budgetData.reduce((sum, item) => sum + item.budgeted, 0);
  const totalSpent = budgetData.reduce((sum, item) => sum + item.spent, 0);
  const totalRemaining = totalBudgeted - totalSpent;
  const percentSpent = totalBudgeted > 0 ? (totalSpent / totalBudgeted) * 100 : 0;
  
  const getProgressColor = (percent: number): string => {
    if (percent < 70) return "bg-budget-safe";
    if (percent < 90) return "bg-budget-caution";
    return "bg-budget-danger";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          {getTranslation("budgetSummary", language)}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {getTranslation("spent", language)}: {formatAmount(totalSpent)} FCFA
            </span>
            <span className="font-medium">
              {getTranslation("remaining", language)}: {formatAmount(totalRemaining)} FCFA
            </span>
          </div>
          <Progress 
            value={percentSpent} 
            className={cn("h-2", getProgressColor(percentSpent))}
          />
          <div className="text-xs text-right">
            {percentSpent.toFixed(0)}% {getTranslation("spent", language)}
          </div>
        </div>
        
        <div className="space-y-3">
          {budgetData.map((category) => {
            const percentUsed = category.budgeted > 0 
              ? (category.spent / category.budgeted) * 100
              : 0;
              
            return (
              <div 
                key={category.category} 
                className={cn("budget-card", getBudgetStatus(category))}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">
                    {getTranslation(category.category, language)}
                  </span>
                  <span className="text-sm">
                    {formatAmount(category.spent)} / {formatAmount(category.budgeted)} FCFA
                  </span>
                </div>
                <Progress 
                  value={percentUsed} 
                  className={cn("h-1.5", getProgressColor(percentUsed))}
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetSummary;
