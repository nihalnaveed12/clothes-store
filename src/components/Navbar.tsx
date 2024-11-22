"use client";

import { Input } from "@/components/ui/input";
import {
  AlignJustify,
  ChevronDown,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { RootState } from "@/store";
import { useSelector } from "react-redux";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [searchValue, setSearchValue] = useState<string>("");
  const pathname = usePathname();
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
  ];

  const collections = [
    { name: "One Piece", href: "/collections/one-piece" },
    { name: "Two Piece", href: "/collections/two-piece" },
    { name: "Three Piece", href: "/collections/three-piece" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      window.location.href = `/products?search=${encodeURIComponent(
        searchValue
      )}`;
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 bg-white w-full">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center py-2 lg:px-4 px-2">
        <div className="flex lg:gap-x-8 gap-x-4 items-center">
          <h1 className="lg:text-[30px] text-[24px] font-bold">BS FASHION</h1>
          <ul className="hidden md:flex gap-x-1 items-center">
            {navItems.map((nav, index) => (
              <li
                key={index}
                className="text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 px-7 py-[6px] rounded-md transition-colors"
              >
                <Link href={nav.href} className="flex items-center ">
                  {nav.name}
                </Link>
              </li>
            ))}
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-zinc-700 hover:text-zinc-950 ">
                      <Link href="/collections" className="text-[16px]">
                        Collections
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {collections.map((collection) => (
                          <li key={collection.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={collection.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {collection.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Explore our {collection.name.toLowerCase()}{" "}
                                  collection
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <X /> : <AlignJustify />}
          </div>

          <form className="relative hidden md:block" onSubmit={handleSearch}>
            <Input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for products"
              className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all duration-200"
            />
            <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
          </form>
          <Link
            href="/cart"
            className="relative hover:bg-zinc-950 hover:text-zinc-50 transition-colors duration-300 p-2 rounded-full cursor-pointer active:bg-zinc-700"
          >
            <ShoppingCart className="" />
            {cartItems.length > 0 && (
              <span className="absolute -top-0 -right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
      {menuOpen && (
          <div className="md:hidden flex flex-col gap-6 p-4 shadow-md">
            <ul>
              {navItems.map((nav, index) => (
                <li
                  key={index}
                  className="mt-4 text-zinc-700 hover:text-zinc-950 cursor-pointer"
                >
                  <Link href={nav.href} className="">
                    {nav.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4 text-zinc-700 hover:text-zinc-950 cursor-pointer">
                <details>
                  <summary className="list-none flex items-center">
                    <Link href="/collections">
                    
                    Collections
                    </Link>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </summary>
                  <ul className="pl-4 mt-2">
                    {collections.map((collection) => (
                      <li key={collection.name} className="mt-2">
                        <Link href={collection.href} className="text-sm">
                          {collection.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
            <div className="relative">
              <Input
                placeholder="Search for products"
                className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all duration-200"
              />
              <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
      )}
    </header>
  );
}
