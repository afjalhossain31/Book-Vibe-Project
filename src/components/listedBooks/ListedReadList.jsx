import React, { useContext, useMemo } from "react";
import { BookContext } from "../../context/context";
import BookCard from "../ui/BookCard";

const ListedReadList = ({ sortingType }) => {
  const { readList } = useContext(BookContext);

  const filteredReadList = useMemo(() => {
    if (!sortingType) return readList;
    if (sortingType === "pages") {
      return [...readList].sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === "rating") {
      return [...readList].sort((a, b) => a.rating - b.rating);
    }
    return readList;
  }, [sortingType, readList]);

  console.log(filteredReadList, "filteredReadList");

  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
        <h2 className="font-bold text-3xl">No read list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredReadList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
