
import React from "react";
import { Language, getTranslation } from "@/utils/languageUtils";
import { BudgetCategory } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface ExpenseChartProps {
  language: Language;
  budgetData: BudgetCategory[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ language, budgetData }) => {
  const filteredData = budgetData.filter(item => item.spent > 0);
  
  const COLORS = [
    '#007A33', // cameroon-green  
    '#CE1126', // cameroon-red
    '#FCD116', // cameroon-yellow
    '#4CAF50', // budget-safe
    '#FFC107', // budget-caution
    '#78909C', // budget-neutral
    '#FF5722',
    '#03A9F4',
    '#9C27B0'
  ];

  // Format data for pie chart
  const chartData = filteredData.map(item => ({
    name: getTranslation(item.category, language),
    value: item.spent
  }));

  return (
    <Card className="w-full h-[350px]">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          {getTranslation("spendingTrends", language)}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[260px]">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => `${value.toLocaleString('fr-FR')} FCFA`} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            No expense data to display
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExpenseChart;
