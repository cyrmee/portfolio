export class CommandHistory {
  private history: string[] = [];
  private maxSize: number = 100;

  add(command: string): void {
    // Don't add empty commands or duplicates of the last command
    if (!command.trim() || (this.history.length > 0 && this.history[this.history.length - 1] === command)) {
      return;
    }

    this.history.push(command);
    
    // Keep only the most recent commands
    if (this.history.length > this.maxSize) {
      this.history = this.history.slice(-this.maxSize);
    }
    
    // Persist to localStorage
    this.save();
  }

  get(index: number): string | undefined {
    return this.history[index];
  }

  getReverse(index: number): string | undefined {
    return this.history[this.history.length - 1 - index];
  }

  getAll(): string[] {
    return [...this.history];
  }

  clear(): void {
    this.history = [];
    this.save();
  }

  size(): number {
    return this.history.length;
  }

  private save(): void {
    try {
      localStorage.setItem('terminal-history', JSON.stringify(this.history));
    } catch (error) {
      // Ignore localStorage errors
    }
  }

  load(): void {
    try {
      const saved = localStorage.getItem('terminal-history');
      if (saved) {
        this.history = JSON.parse(saved);
      }
    } catch (error) {
      // Ignore localStorage errors
    }
  }
}