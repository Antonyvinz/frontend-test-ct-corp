import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 px-3 py-3 md:px-5 md:py-5 text-white mb-4">
      <div
      // className="px-2 py-2 sm:px-6 sm:py-6 lg:px-8 lg:py-8 text-white mb-4"
      >
        <Link href="/" className="bg-blue-500 rounded p-2 text-xs md:text-xl">
          Return to List
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
