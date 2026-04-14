"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

const popins = Poppins({
    weight: "400",
    subsets: ["latin"],
});

const NavBar = () => {
    const pathName = usePathname();
    console.log(pathName);

    const links = (
        <>
            <li>
                <Link className={`${pathName === "/" ? "bg-blue-500" : ""}`} href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link className={`${pathName === "/about" ? "bg-blue-500" : ""}`} href="/about">
                    About
                </Link>
            </li>
            <li>
                <Link className={`${pathName === "/contact" ? "bg-blue-500" : ""}`} href="/contact">
                    Contact
                </Link>
            </li>
            <li>
                <Link className={`${pathName === "/blogs" ? "bg-blue-500" : ""}`} href="/blogs">
                    Blogs
                </Link>
            </li>
            <li>
                <Link className={`${pathName === "/dashboard" ? "bg-blue-500" : ""}`} href="/dashboard">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link className={`${pathName === "/users" ? "bg-blue-500" : ""}`} href="/users">
                    Users
                </Link>
            </li>
            <li>
                <Link className={`${pathName === "/about/developers" ? "bg-blue-500" : ""}`} href="/about/developers">
                    Developers
                </Link>
            </li>
        </>
    );

    return (
        <div className={popins.className}>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {" "}
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl">
                        daisyUI
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
