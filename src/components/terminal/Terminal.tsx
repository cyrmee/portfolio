import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { CommandExecutor } from "./CommandExecutor";
import { CommandHistory } from "./CommandHistory";
import { TerminalThemeSwitcher, terminalThemes } from "./TerminalThemes";

interface TerminalProps {
  className?: string;
}

export interface TerminalOutput {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: Date;
  type: 'success' | 'error' | 'info';
}

export const Terminal = ({ className }: TerminalProps) => {
  const [history, setHistory] = useState<TerminalOutput[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentTheme, setCurrentTheme] = useState("hacker");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commandExecutor = new CommandExecutor();
  const commandHistoryManager = new CommandHistory();
  const theme = terminalThemes[currentTheme];

  // Auto-focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    const welcomeOutput: TerminalOutput = {
      id: "welcome",
      command: "",
      output: (
        <div className="space-y-2">
          <div className="text-green-400">
            ╭─────────────────────────────────────────────╮
          </div>
          <div className="text-green-400">
            │  Welcome to Mehretab's Interactive Terminal │
          </div>
          <div className="text-green-400">
            ╰─────────────────────────────────────────────╯
          </div>
          <div className="text-gray-400 mt-4">
            Type <span className="text-yellow-400">help</span> to see available commands
          </div>
          <div className="text-gray-400">
            Type <span className="text-yellow-400">whoami</span> to learn about me
          </div>
        </div>
      ),
      timestamp: new Date(),
      type: 'info'
    };
    setHistory([welcomeOutput]);
  }, []);

  const executeCommand = async (command: string) => {
    if (!command.trim()) return;

    // Add to command history
    const updatedCommandHistory = [...commandHistory, command];
    setCommandHistory(updatedCommandHistory);
    commandHistoryManager.add(command);
    setHistoryIndex(-1);

    try {
      const result = await commandExecutor.execute(command);
      
      const newOutput: TerminalOutput = {
        id: Date.now().toString(),
        command,
        output: result.output,
        timestamp: new Date(),
        type: result.type || 'success'
      };

      setHistory(prev => [...prev, newOutput]);
    } catch (error) {
      const errorOutput: TerminalOutput = {
        id: Date.now().toString(),
        command,
        output: (
          <div className="text-red-400">
            Command not found: {command}
            <br />
            Type 'help' for available commands.
          </div>
        ),
        timestamp: new Date(),
        type: 'error'
      };
      
      setHistory(prev => [...prev, errorOutput]);
    }

    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // TODO: Implement tab completion
    }
  };

  const getPrompt = () => {
    return <span className={theme.prompt}>visitor@mehretab.dev</span>;
  };

  const getCurrentPath = () => {
    return <span className="text-blue-400">~</span>;
  };

  return (
    <div 
      className={cn(
        theme.background, theme.foreground, "font-mono text-sm overflow-hidden",
        "border border-gray-600 rounded-lg shadow-2xl",
        "min-h-[500px] max-h-[80vh]",
        className
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-600 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="ml-4 text-gray-300 text-xs">
            mehretab@portfolio: ~
          </div>
        </div>
        <TerminalThemeSwitcher 
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
        />
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 overflow-y-auto flex-1"
        style={{ height: "calc(100% - 40px)" }}
      >
        {/* Command History */}
        {history.map((entry) => (
          <div key={entry.id} className="mb-2">
            {entry.command && (
              <div className="flex items-center space-x-2 mb-1">
                {getPrompt()}
                <span className="text-white">:</span>
                {getCurrentPath()}
                <span className="text-white">$</span>
                <span className="text-white">{entry.command}</span>
              </div>
            )}
            <div className="ml-0 mb-2">{entry.output}</div>
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-center space-x-2">
          {getPrompt()}
          <span className="text-white">:</span>
          {getCurrentPath()}
          <span className="text-white">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none flex-1 text-white caret-green-400"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};