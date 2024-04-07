import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 pr-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-white text-lg font-semibold">
          <div className="text-white">
            <Image
              src="/images/logo-img.png"
              alt="logo image"
              width={60}
              height={60}
            />
          </div>
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
              <Link href="/projects" className="text-white p-2">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white p-2">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://blog-madhummithas-projects.vercel.app/"
                target="_blank"
                className="text-white p-2"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
