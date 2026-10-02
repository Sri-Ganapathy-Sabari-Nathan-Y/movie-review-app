interface FilterBarProps {
  genre: string;
  year: string;
  rating: string;
  setGenre: (value: string) => void;
  setYear: (value: string) => void;
  setRating: (value: string) => void;
}

export const FilterBar = ({
  genre,
  year,
  rating,
  setGenre,
  setYear,
  setRating,
}: FilterBarProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {/* Genre */}
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="rounded-lg bg-[#16161D] px-4 py-2 text-white"
      >
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
        <option value="27">Horror</option>
        <option value="878">Science Fiction</option>
        <option value="10749">Romance</option>
        <option value="53">Thriller</option>
      </select>

      {/* Year */}
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="rounded-lg bg-[#16161D] px-4 py-2 text-white"
      >
        <option value="">All Years</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>

      {/* Rating */}
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="rounded-lg bg-[#16161D] px-4 py-2 text-white"
      >
        <option value="">All Ratings</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
        <option value="5">5+</option>
      </select>
    </div>
  );
};
