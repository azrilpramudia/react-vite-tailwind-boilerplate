import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex font-bold h-[10vh] text-2xl items-center shadow-md justify-between px-5">
      <div className="text-primary">
        <Link to="/">Logo</Link>
      </div>

      <div className="flex justify-between w-[7vw] cursor-pointer">
        <Link to="/job" className=" hover:text-red-600">
          Job
        </Link>
        <Link to="/view" className="hover:text-blue-600">
          View
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
