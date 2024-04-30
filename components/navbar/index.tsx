import Link from "next/link";
import Actions from "./actions";
import Logo from "./logo";
import Navigation from "./navigation";

const Navbar = () => {
  return (
    <div className="fixed top-0 h-20 flex w-full bg-white shadow-md py-4 lg:px-12 items-center justify-between z-50">
      <Logo className={""} />
      <Navigation />
    </div>
  );
};

export default Navbar;
