import { Terminal } from "@/components/terminal";

const TerminalPortfolio = () => {
  return (
    <div className="min-h-screen bg-black p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <Terminal className="w-full h-[90vh]" />
      </div>
    </div>
  );
};

export default TerminalPortfolio;