import { Check } from "lucide-react";

const ReadBookImage = () => {
  return (
    <div className="relative w-32 h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-2 right-2 bg-emerald-500 rounded-full p-1">
        <Check className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default ReadBookImage;
