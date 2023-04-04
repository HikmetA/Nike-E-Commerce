import React from "react";
import { useEffect, useState } from "react";
import { toprateslaes } from "../../data/data";
import Item from "../utils/Item";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [navState, setnavState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setnavState(true);
    } else {
      setnavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <div className="flex justify-center right-[90px] ml-40 absolute">
        <div className="xl:w-56 lg:w-56 md:w-40">
          <div className="flex w-full flex-wrap">
            <input
              type="search"
              className={`block w-[1%] min-w-0 flex-auto rounded border border-solid bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:shadow-te-primary focus:outline-none   ${navState ? "border-neutral-900 text-neutral-900 focus:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:placeholder:text-neutral-900" : "border-neutral-300 text-neutral-100 focus:text-neutral-100 dark:border-neutral-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"}`}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-2 text-center text-base font-normal text-neutral-100 dark:text-neutral-200"
              id="basic-addon2"
            ></span>
          </div>
        </div>
      </div>
      <div className="absolute top-[40px] mt-[15px] grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-3 overflow-hidden md:grid-cols-2 sm:grid-cols-1 ">
        {toprateslaes.items
          .filter((val) => {
            if (searchTerm == "") {
              return;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="flex z-[250] mb-5 mr-20 w-60">
                <Item
                  color={val.color}
                  shadow={val.shadow}
                  title={val.title}
                  text={val.text}
                  price={val.price}
                  rating={val.rating}
                  btn={val.btn}
                  img={val.img}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Search;
