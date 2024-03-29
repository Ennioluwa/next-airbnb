"use client";

import { User } from "next-auth";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className=" fixed w-full bg-white shadow-sm z-10">
      <div
        className="
            py-4
            border-b-[1px] 
      "
      >
        <Container>
          <div className=" flex flex-row items-center justify-between gap-3 md:gap-3">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
