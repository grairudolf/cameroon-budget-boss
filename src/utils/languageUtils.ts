
export type Language = 'en' | 'fr' | 'pidgin';

export type Translations = {
  [key: string]: {
    en: string;
    fr: string;
    pidgin: string;
  };
};

export const translations: Translations = {
  appTitle: {
    en: 'Budget Boss',
    fr: 'Budget Patron',
    pidgin: 'Money Manager'
  },
  dashboard: {
    en: 'Dashboard',
    fr: 'Tableau de bord',
    pidgin: 'Dashboard'
  },
  income: {
    en: 'Income',
    fr: 'Revenus',
    pidgin: 'Money weh yi don enter'
  },
  expenses: {
    en: 'Expenses',
    fr: 'Dépenses',
    pidgin: 'Money weh yi don comot'
  },
  balance: {
    en: 'Balance',
    fr: 'Solde',
    pidgin: 'Money weh yi remain'
  },
  addExpense: {
    en: 'Add Expense',
    fr: 'Ajouter une dépense',
    pidgin: 'Add expense'
  },
  addIncome: {
    en: 'Add Income',
    fr: 'Ajouter un revenu',
    pidgin: 'Add income'
  },
  category: {
    en: 'Category',
    fr: 'Catégorie',
    pidgin: 'Category'
  },
  amount: {
    en: 'Amount',
    fr: 'Montant',
    pidgin: 'How much'
  },
  date: {
    en: 'Date',
    fr: 'Date',
    pidgin: 'Date'
  },
  description: {
    en: 'Description',
    fr: 'Description',
    pidgin: 'Talk small about am'
  },
  save: {
    en: 'Save',
    fr: 'Enregistrer',
    pidgin: 'Save am'
  },
  cancel: {
    en: 'Cancel',
    fr: 'Annuler',
    pidgin: 'Cancel am'
  },
  templates: {
    en: 'Budget Templates',
    fr: 'Modèles de budget',
    pidgin: 'Budget template dem'
  },
  student: {
    en: 'Student',
    fr: 'Étudiant',
    pidgin: 'Student'
  },
  worker: {
    en: 'Salaried Worker',
    fr: 'Salarié',
    pidgin: 'Worker'
  },
  selectTemplate: {
    en: 'Select Template',
    fr: 'Sélectionner un modèle',
    pidgin: 'Choose template'
  },
  expenseCategories: {
    en: 'Expense Categories',
    fr: 'Catégories de dépenses',
    pidgin: 'Expense category dem'
  },
  monthlyBudget: {
    en: 'Monthly Budget',
    fr: 'Budget mensuel',
    pidgin: 'Monthly budget'
  },
  food: {
    en: 'Food',
    fr: 'Alimentation',
    pidgin: 'Chop'
  },
  transport: {
    en: 'Transport',
    fr: 'Transport',
    pidgin: 'Transport'
  },
  airtime: {
    en: 'Airtime/Data',
    fr: 'Crédit/Internet',
    pidgin: 'Credit/Data'
  },
  offering: {
    en: 'Offering/Tithe',
    fr: 'Offrande/Dîme',
    pidgin: 'Church money'
  },
  rent: {
    en: 'Rent',
    fr: 'Loyer',
    pidgin: 'House rent'
  },
  utilities: {
    en: 'Utilities',
    fr: 'Factures',
    pidgin: 'ENEO/CAMWATER'
  },
  education: {
    en: 'Education',
    fr: 'Éducation',
    pidgin: 'School fees'
  },
  entertainment: {
    en: 'Entertainment',
    fr: 'Divertissement',
    pidgin: 'Enjoyment'
  },
  other: {
    en: 'Other',
    fr: 'Autre',
    pidgin: 'Other'
  },
  budgetSummary: {
    en: 'Budget Summary',
    fr: 'Résumé du budget',
    pidgin: 'Budget summary'
  },
  spendingTrends: {
    en: 'Spending Trends',
    fr: 'Tendances de dépenses',
    pidgin: 'How you dey spend'
  },
  remaining: {
    en: 'Remaining',
    fr: 'Restant',
    pidgin: 'Weh yi remain'
  },
  spent: {
    en: 'Spent',
    fr: 'Dépensé',
    pidgin: 'Weh yi don spend'
  }
};

export function getTranslation(key: string, language: Language): string {
  const translationObj = translations[key];
  if (!translationObj) return key;
  return translationObj[language] || key;
}
