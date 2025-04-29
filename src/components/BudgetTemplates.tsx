
import React from "react";
import { Language, getTranslation } from "@/utils/languageUtils";
import { BudgetTemplate } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BudgetTemplatesProps {
  language: Language;
  templates: BudgetTemplate[];
  onSelectTemplate: (template: BudgetTemplate) => void;
}

const BudgetTemplates: React.FC<BudgetTemplatesProps> = ({ 
  language, 
  templates, 
  onSelectTemplate 
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          {getTranslation("templates", language)}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {templates.map((template) => (
            <div 
              key={template.id} 
              className="border rounded-lg p-3 hover:bg-secondary/50 transition-colors cursor-pointer"
              onClick={() => onSelectTemplate(template)}
            >
              <h4 className="font-medium mb-2">
                {getTranslation(template.type, language)}
              </h4>
              <div className="text-sm text-muted-foreground mb-3">
                {template.categories.length} {getTranslation("expenseCategories", language)}
              </div>
              <Button variant="outline" size="sm" className="w-full">
                {getTranslation("selectTemplate", language)}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetTemplates;
