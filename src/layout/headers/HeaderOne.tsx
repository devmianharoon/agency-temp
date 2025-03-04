"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import logoImg from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import TopHeader from "./TopHeader";
import { usePathname } from "next/navigation";
import navMenuData from "@/data/headernav/nav-menus";
import CartIcon from "@/sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "@/sheardComponent/elements/icons/wishlist-icon";
import useGlobalContext from "@/hooks/use-context";
import {
  useUniqueProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import SidebarCart from "./SidebarCart";
import SidebarWishlist from "./SidebarWishlist";
import MobileMenu from "./MobileMenu";
const HeaderOne = () => {
  const pathName = usePathname();
  const { setOpenCart, setOpenWishlist, toggleSideMenu, sideMenuOpen } =
    useGlobalContext();
  const productQuantity = useUniqueProductCount();
  const wishlistQuantity = useUniqueWishlstCount();
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = () => {
    const header = document.querySelector(".main-menu-area");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 40
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
    }
  };
  return (
    <>
      <header id="header-wrap">
        {pathName !== "/home-2" && <TopHeader />}
        <div id="sticky-header" className="main-menu-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <Image src={logoImg} width={134} height={34} alt="flag" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 "></div>
              <div
                id="right-header"
                className="col-xl-5 col-lg-5 col-md-6 col-4">
                <div className="main-menu text-right d-none d-xl-block">
                  <nav id="mobile-menu">
                    <ul className="d-flex">
                      {navMenuData.map((item) => (
                        <li key={item.id}>
                          <Link href={item.link}> {item.label} </Link>
                          {item.hasDropdown === true && (
                            <>
                              <ul className="sub-menu text-left">
                                {item?.subMenu?.map((itm, index) => (
                                  <li key={index}>
                                    <Link href={itm.link}> {itm.label} </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu />
        <div
          onClick={toggleSideMenu}
          className={sideMenuOpen ? "body-overlay show" : "body-overlay"}></div>
      </header>
      <SidebarCart />
      <SidebarWishlist />
    </>
  );
};

export default HeaderOne;
