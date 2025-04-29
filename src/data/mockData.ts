
export type ExpenseCategory = 
  | 'food' 
  | 'transport' 
  | 'airtime' 
  | 'offering' 
  | 'rent' 
  | 'utilities' 
  | 'education' 
  | 'entertainment' 
  | 'other';

export interface Expense {
  id: string;
  category: ExpenseCategory;
  amount: number;
  date: string;
  description: string;
}

export interface Income {
  id: string;
  source: string;
  amount: number;
  date: string;
  description: string;
}

export interface BudgetCategory {
  category: ExpenseCategory;
  budgeted: number;
  spent: number;
}

export interface BudgetTemplate {
  id: string;
  name: string;
  type: 'student' | 'worker' | 'custom';
  categories: BudgetCategory[];
}

export const mockExpenses: Expense[] = [
  {
    id: '1',
    category: 'food',
    amount: 5000,
    date: '2025-04-25',
    description: 'Groceries from Mahima'
  },
  {
    id: '2',
    category: 'transport',
    amount: 1500,
    date: '2025-04-24',
    description: 'Taxi fare'
  },
  {
    id: '3',
    category: 'airtime',
    amount: 2000,
    date: '2025-04-23',
    description: 'MTN data bundle'
  },
  {
    id: '4',
    category: 'offering',
    amount: 3000,
    date: '2025-04-21',
    description: 'Sunday offering'
  },
  {
    id: '5',
    category: 'food',
    amount: 3500,
    date: '2025-04-20',
    description: 'Lunch at restaurant'
  },
];

export const mockIncomes: Income[] = [
  {
    id: '1',
    source: 'Salary',
    amount: 150000,
    date: '2025-04-01',
    description: 'Monthly salary'
  },
  {
    id: '2',
    source: 'Side gig',
    amount: 25000,
    date: '2025-04-15',
    description: 'Website development'
  }
];

export const mockBudget: BudgetCategory[] = [
  { category: 'food', budgeted: 45000, spent: 8500 },
  { category: 'transport', budgeted: 20000, spent: 1500 },
  { category: 'airtime', budgeted: 10000, spent: 2000 },
  { category: 'offering', budgeted: 15000, spent: 3000 },
  { category: 'rent', budgeted: 50000, spent: 0 },
  { category: 'utilities', budgeted: 15000, spent: 0 },
  { category: 'education', budgeted: 25000, spent: 0 },
  { category: 'entertainment', budgeted: 10000, spent: 0 },
  { category: 'other', budgeted: 15000, spent: 0 },
];

export const mockTemplates: BudgetTemplate[] = [
  {
    id: '1',
    name: 'Student Budget',
    type: 'student',
    categories: [
      { category: 'food', budgeted: 30000, spent: 0 },
      { category: 'transport', budgeted: 15000, spent: 0 },
      { category: 'airtime', budgeted: 7000, spent: 0 },
      { category: 'offering', budgeted: 5000, spent: 0 },
      { category: 'education', budgeted: 20000, spent: 0 },
      { category: 'entertainment', budgeted: 8000, spent: 0 },
      { category: 'other', budgeted: 10000, spent: 0 },
    ]
  },
  {
    id: '2',
    name: 'Salaried Worker',
    type: 'worker',
    categories: [
      { category: 'food', budgeted: 45000, spent: 0 },
      { category: 'transport', budgeted: 20000, spent: 0 },
      { category: 'airtime', budgeted: 10000, spent: 0 },
      { category: 'offering', budgeted: 15000, spent: 0 },
      { category: 'rent', budgeted: 50000, spent: 0 },
      { category: 'utilities', budgeted: 15000, spent: 0 },
      { category: 'entertainment', budgeted: 15000, spent: 0 },
      { category: 'other', budgeted: 20000, spent: 0 },
    ]
  }
];
