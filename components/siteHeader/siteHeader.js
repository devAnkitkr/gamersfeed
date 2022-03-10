import { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "../../components/searchBar/searchBar";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

export default function SiteHeader({ isSiteHeaderContent }) {
  const [isClicked, setisClicked] = useState(false);
  const handleOnClick = () => {
    setisClicked(!isClicked);
  };
  useEffect(() => {
    if (isClicked === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isClicked, setisClicked]);

  return (
    <div className="flex flex-col align-center w-full bg-[url('/finalImage.jpg')] bg-cover">
      <header className="px-4 xl:px-0 flex w-full justify-between md:justify-between max-w-screen-lg mx-auto items-center py-2">
        <Link href="/" passHref>
          <h1 className="text-2xl font-bold hover:cursor-pointer ease-in duration-150 hover:text-red-500">
            GamersFeed
          </h1>
        </Link>

        <nav
          className={` check ${
            isClicked
              ? "fixed z-10 top-12 right-0 left-0 md:inset-auto md:bg-none bg-[url('/finalImage.jpg')] h-screen w-screen md:relative md:h-full md:w-auto"
              : "hidden relative md:block md:relative  md:h-full md:w-auto md:bg-transparent"
          }`}
        >
          <ul className="flex flex-col justify-evenly text-2xl md:text-base items-center h-full md:flex-row text-center">
            <li
              className={`md:inline md:px-1 px-2 font-bold ease-in duration-150 hover:text-red-500`}
              onClick={() => setisClicked(false)}
            >
              <Link href="/category/news">News</Link>
            </li>
            <li
              className="md:inline md:px-1 lg:px-4 font-bold ease-in duration-150 hover:text-red-500"
              onClick={() => setisClicked(false)}
            >
              <Link href="/category/review">Reviews</Link>
            </li>
            <li
              className="md:inline md:px-1 lg:px-4 font-bold ease-in duration-150 hover:text-red-500"
              onClick={() => setisClicked(false)}
            >
              <Link href="/category/streamer">Streamers</Link>
            </li>
            <li
              className="md:inline md:px-1 lg:px-4 font-bold ease-in duration-150 hover:text-red-500"
              onClick={() => setisClicked(false)}
            >
              <Link href="/category/gadget">Gadgets</Link>
            </li>
          </ul>
        </nav>
        <div className=" hidden  md:flex items-center lg:flex items-center">
          <div className="mr-2 md:mr-1">
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="cursor-pointer px-1 md:mx-0 ease-in duration-150 hover:text-red-500" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="cursor-pointer px-1 md:mx-0 ease-in duration-150 hover:text-red-500" />
            </a>
          </div>
          <SearchBar className="sm:hidden" />
        </div>
        <div
          className="md:hidden w-6 float-right cursor-pointer"
          onClick={handleOnClick}
        >
          <div
            className={`w-5 h-1 bg-black m-1 ease-in duration-75 ${
              isClicked === true
                ? "rotate-45 bottom-0 translate-y-1"
                : "rotate-0"
            }`}
          ></div>
          <div
            className={`w-5 h-1 bg-black m-1 ease-in duration-75 ${
              isClicked === true ? "hidden" : "block"
            }`}
          ></div>
          <div
            className={`w-5 h-1 bg-black m-1 ${
              isClicked === true
                ? "-rotate-45 -translate-y-1 ease-in duration-75"
                : "rotate-0"
            }`}
          ></div>
        </div>
      </header>
      <div
        className={`${
          !isSiteHeaderContent
            ? "invisible w-0 h-0"
            : "text-3xl font-bold items-center text-center py-20 mx-auto "
        }`}
      >
        <div>
          <h1>Welcome to GamersFeed</h1>
          <h2>Most Trusted Gaming News on Internet</h2>
        </div>
      </div>
    </div>
  );
}
