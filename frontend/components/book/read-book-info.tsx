import BookAuthor from "./book-author";
import BookTitle from "./book-title";
import { Star, Check } from "lucide-react";

const ReadBookInfo = () => {
  const rating = 4;
  const skills = ["Python", "ML", "Data Science"];

  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <div className="space-y-2">
        <BookTitle>Deep Learning</BookTitle>
        <BookAuthor>Author</BookAuthor>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300 
                       group-hover:bg-gray-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center text-sm text-emerald-400">
          <Check className="w-4 h-4 mr-1" />
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
};

export default ReadBookInfo;
