import { useCallback, useState } from "react";
import Link from "next/link";
import SearchIcon from "@material-ui/icons/Search";
import { posts } from "../../cache/data";

const SearchBar = () => {
  const [results, setResults] = useState([]);

  const onChange = useCallback((event) => {
    const query = event.target.value;
    if (query.length) {
      setResults(
        posts.filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        )
      );
      // setResults([]);
    } else {
      setResults([]);
    }
  }, []);

  return (
    <div className="w-64 relative">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="px-1 py-1 rounded-sm focus:outline-0 w-full"
          onChange={onChange}
        />
        <SearchIcon className="-ml-7 mt-0 text-gray-400" />
      </div>
      <div>
        <ul className="absolute  rounded-sm w-100 right-0">
          {results.map((item,index) => (
            <li className="px-2 mt-1 bg-white text-sm ease-in duration-150 hover:text-red-700" key={index}>
              <Link href={`/post/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
