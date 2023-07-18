"use client";

import { Cross1Icon } from "@radix-ui/react-icons";

const TagsGenerator = () => {
  return (
    <div className="p-6">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
        Badge
        <button className="ml-2 focus:outline-none">
          <Cross1Icon />
        </button>
      </span>
    </div>
  );
};

export default TagsGenerator;
