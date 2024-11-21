import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <div className="flex-1 p-2 bg-gray-100 flex gap-2 rounded-md">
      <Search className="text-gray-500" />
      <input
        placeholder="Search a book"
        className="w-full bg-transparent text-gray-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
