
import React from "react";
import { Button } from "@/components/ui/button";
import { Language } from "@/utils/languageUtils";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLanguage, 
  onLanguageChange 
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={currentLanguage === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className="h-8 px-3"
      >
        EN
      </Button>
      <Button
        variant={currentLanguage === "fr" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("fr")}
        className="h-8 px-3"
      >
        FR
      </Button>
      <Button
        variant={currentLanguage === "pidgin" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("pidgin")}
        className="h-8 px-3"
      >
        PIDGIN
      </Button>
    </div>
  );
};

export default LanguageSelector;
