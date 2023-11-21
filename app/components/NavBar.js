import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-white text-lg font-semibold">
          <Image
            src="/images/logo2.jpg"
            alt="logo image"
            //className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={50}
            height={50}
          />
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
