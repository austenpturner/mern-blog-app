import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import classes from "./styles.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get("http://localhost:3000/api/blogs");
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h2>Loading blogs. Please wait... </h2>
      ) : (
        <div className={classes.blogList}>
          {blogList.map((blogItem) => (
            <div key={blogItem._id}>
              <p>{blogItem.title}</p>
              <p>{blogItem.description}</p>
              <FaEdit size={30} />
              <FaTrash size={30} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
