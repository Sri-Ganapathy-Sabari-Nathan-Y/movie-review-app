interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  // function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //   setSearchQuery(e.currentTarget.previousElementSibling.value);
  // }
  return (
    <div className="mx-auto flex max-w-2xl gap-2">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full rounded-lg bg-[#16161D] px-4 py-3 text-white outline-none ring-1 ring-[#2D2D36] focus:ring-[#E50914]"
      />

      {/* <button
        className="rounded-lg bg-[#E50914] px-6 py-3 font-semibold transition hover:bg-red-700"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Search
      </button> */}
    </div>
  );
};
