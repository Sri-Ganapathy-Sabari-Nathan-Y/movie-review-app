import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="w-full h-12.5 bg-[#16161D] font-bold flex justify-between items-center px-6">
      <div className="w-3/4 cursor-pointer">
        <nav>
          <Link to="/" className="hover:text-[#E50914] transition-colors">
            <h1>🎬 Movie Review</h1>
          </Link>
        </nav>
      </div>

      <div className="w-1/4">
        <nav className="flex justify-evenly">
          <Link to="/" className="hover:text-[#E50914] transition-colors">
            Home
          </Link>
          <Link to="/Search" className="hover:text-[#E50914] transition-colors">
            Search
          </Link>
        </nav>
      </div>
    </nav>
  );
};
