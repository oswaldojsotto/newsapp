import React from "react";
import Link from "next/link";

const Header = () => {
  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
  ];

  return (
    <div className="max-w-xl m-auto pb-10 xxs:max-w-xs xs:max-w-md">
      <ul className=" flex max-w-xl m-auto">
        {links.map(({ name, route }) => {
          return (
            <Link href={route} key={name} className="">
              <li className=" hover:text-pink-600 hover:underline text-sl py-5 pr-1 transition-all text-xl mr-4 ">
                {name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
