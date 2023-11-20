import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-white text-lg font-semibold">
          LOGO
        </Link>

        <div>
          <ul className="font-medium flex space-x-4">
            <li>
              <Link href="/" className="text-white p-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white p-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white p-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
