
import React from "react";
import { Language, getTranslation } from "@/utils/languageUtils";
import LanguageSelector from "./LanguageSelector";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  language, 
  onLanguageChange,
  toggleSidebar
}) => {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-cameroon-green flex items-center justify-center mr-2">
                <span className="text-white font-bold">₣</span>
              </div>
              <span className="text-xl font-bold text-cameroon-green">
                {getTranslation("appTitle", language)}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <LanguageSelector 
              currentLanguage={language} 
              onLanguageChange={onLanguageChange} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
