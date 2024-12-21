import { DollarSign } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-primary w-full py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Masroofy</h1>
        </div>
      </div>
    </header>
  );
};