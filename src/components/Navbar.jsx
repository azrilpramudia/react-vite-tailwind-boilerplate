const Navbar = () => {
  return (
    <nav className="flex font-bold h-[10vh] text-2xl items-center shadow-md justify-between px-5">
      <div className="text-primary">
        <h1>Navbar</h1>
      </div>

      <div className="flex justify-between w-[7vw] cursor-pointer">
        <h1 className=" hover:text-red-600">Job</h1>
        <h1 className="hover:text-blue-600">View</h1>
      </div>
    </nav>
  );
};

export default Navbar;
