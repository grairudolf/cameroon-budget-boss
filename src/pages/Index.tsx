import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import BudgetSummary from "@/components/BudgetSummary";
import ExpenseForm from "@/components/ExpenseForm";
import BudgetTemplates from "@/components/BudgetTemplates";
import ExpenseChart from "@/components/ExpenseChart";
import { Language } from "@/utils/languageUtils";
import { 
  mockIncomes, 
  mockExpenses, 
  mockBudget, 
  mockTemplates, 
  Expense, 
  BudgetTemplate, 
  BudgetCategory,
  ExpenseCategory
} from "@/data/mockData";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarProvider, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Calendar, ChartBar, DollarSign, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);
  const [incomes] = useState(mockIncomes);
  const [budget, setBudget] = useState<BudgetCategory[]>(mockBudget);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();

  const handleAddExpense = (expense: {
    category: ExpenseCategory;
    amount: number;
    date: string;
    description: string;
  }) => {
    const newExpense: Expense = {
      id: `exp-${Date.now()}`,
      ...expense
    };
    
    // Add expense to list
    setExpenses([newExpense, ...expenses]);
    
    // Update budget spent amounts
    const updatedBudget = budget.map(item => {
      if (item.category === expense.category) {
        return { ...item, spent: item.spent + expense.amount };
      }
      return item;
    });
    
    setBudget(updatedBudget);
    
    toast({
      title: "Expense added",
      description: `Added ${expense.amount.toLocaleString('fr-FR')} FCFA for ${expense.category}`,
    });
  };

  const handleSelectTemplate = (template: BudgetTemplate) => {
    // Copy template budget categories but keep current spent amounts
    const newBudget = template.categories.map(templateCategory => {
      const currentCategory = budget.find(
        b => b.category === templateCategory.category
      );
      
      return {
        category: templateCategory.category,
        budgeted: templateCategory.budgeted,
        spent: currentCategory ? currentCategory.spent : 0
      };
    });
    
    // Add any missing categories from current budget that aren't in the template
    budget.forEach(currentCategory => {
      if (!newBudget.some(b => b.category === currentCategory.category)) {
        newBudget.push({
          category: currentCategory.category,
          budgeted: 0,
          spent: currentCategory.spent
        });
      }
    });
    
    setBudget(newBudget);
    
    toast({
      title: "Budget template applied",
      description: `You're now using the ${template.name} template`,
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider defaultOpen={true} open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r">
          <SidebarHeader>
            <div className="p-4 flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-cameroon-green flex items-center justify-center">
                <span className="text-white text-xl font-bold">₣</span>
              </div>
              <span className="text-lg font-semibold">Budget Boss</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <div className="space-y-1 p-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <DollarSign className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                Add Expense
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Budget Calendar
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <ChartBar className="mr-2 h-4 w-4" />
                Reports
              </Button>
            </div>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1">
          <Navbar 
            language={language} 
            onLanguageChange={setLanguage} 
            toggleSidebar={toggleSidebar}
          />
          
          <main className="container py-6 max-w-7xl">
            <div className="hidden md:flex justify-between items-center mb-6">
              <SidebarTrigger>
                <Button variant="outline" size="sm">
                  Toggle Sidebar
                </Button>
              </SidebarTrigger>
            </div>

            <Dashboard 
              language={language} 
              incomes={incomes} 
              expenses={expenses} 
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="space-y-6">
                <BudgetSummary language={language} budgetData={budget} />
                <BudgetTemplates 
                  language={language} 
                  templates={mockTemplates} 
                  onSelectTemplate={handleSelectTemplate} 
                />
              </div>
              <div className="space-y-6">
                <ExpenseChart language={language} budgetData={budget} />
                <ExpenseForm language={language} onAddExpense={handleAddExpense} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
