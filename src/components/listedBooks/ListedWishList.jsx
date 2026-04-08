import React, { useContext, useMemo } from "react";
import { BookContext } from "../../context/context";
import BookCard from "../ui/BookCard";

const ListedWishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  console.log(wishList, "bookContext");

  const filteredWishList = useMemo(() => {
    if (!sortingType) return wishList;
    if (sortingType === "pages") {
      return [...wishList].sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === "rating") {
      return [...wishList].sort((a, b) => a.rating - b.rating);
    }
    return wishList;
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
        <h2 className="font-bold text-3xl">No wish list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredWishList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
