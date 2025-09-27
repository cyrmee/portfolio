import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TerminalTheme {
  name: string;
  background: string;
  foreground: string;
  prompt: string;
  success: string;
  error: string;
  info: string;
  accent: string;
}

export const terminalThemes: Record<string, TerminalTheme> = {
  hacker: {
    name: "Hacker Green",
    background: "bg-black",
    foreground: "text-green-400",
    prompt: "text-green-400",
    success: "text-green-400",
    error: "text-red-400",
    info: "text-yellow-400",
    accent: "text-cyan-400",
  },
  matrix: {
    name: "Matrix",
    background: "bg-gray-900",
    foreground: "text-green-300",
    prompt: "text-green-500",
    success: "text-green-300",
    error: "text-red-300",
    info: "text-yellow-300",
    accent: "text-cyan-300",
  },
  cyberpunk: {
    name: "Cyberpunk",
    background: "bg-purple-900",
    foreground: "text-pink-300",
    prompt: "text-pink-400",
    success: "text-green-300",
    error: "text-red-400",
    info: "text-yellow-300",
    accent: "text-cyan-300",
  },
  retro: {
    name: "Retro Amber",
    background: "bg-black",
    foreground: "text-amber-300",
    prompt: "text-amber-400",
    success: "text-green-400",
    error: "text-red-400",
    info: "text-yellow-300",
    accent: "text-blue-300",
  },
  vscode: {
    name: "VS Code Dark",
    background: "bg-slate-900",
    foreground: "text-slate-300",
    prompt: "text-blue-400",
    success: "text-green-400",
    error: "text-red-400",
    info: "text-yellow-300",
    accent: "text-cyan-400",
  },
};

interface TerminalThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export const TerminalThemeSwitcher = ({ 
  currentTheme, 
  onThemeChange 
}: TerminalThemeSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded transition-colors"
        title="Change Terminal Theme"
      >
        🎨 {terminalThemes[currentTheme]?.name || "Theme"}
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-8 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-20 min-w-40">
            <div className="p-2">
              <div className="text-gray-300 text-xs font-semibold mb-2 px-2">Terminal Themes</div>
              {Object.entries(terminalThemes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => {
                    onThemeChange(key);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-2 py-1 text-xs rounded transition-colors flex items-center space-x-2",
                    currentTheme === key 
                      ? "bg-gray-700 text-white" 
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  <span className={cn("w-3 h-3 rounded-full", theme.background, theme.foreground)} />
                  <span>{theme.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};