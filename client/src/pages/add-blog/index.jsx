import { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNewBlog() {
  const { formData, setFormData } = useContext(GlobalContext);
  const navigate = useNavigate();

  async function handleSaveBlogToDatabase() {
    const response = await axios.post("http://localhost:3000/api/blogs/add", {
      title: formData.title,
      description: formData.description,
    });

    const result = await response.data;

    if (result) {
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  return (
    <div className={classes.wrapper}>
      <h2>Add New Blog</h2>
      <div className={classes.formWrapper}>
        <input
          type="text"
          name="title"
          placeholder="Enter blog title..."
          id="title"
          value={formData.title}
          onChange={(event) =>
            setFormData({
              ...formData,
              title: event.target.value,
            })
          }
        />
        <textarea
          name="description"
          placeholder="Enter blog description..."
          id="description"
          type="text"
          value={formData.description}
          onChange={(event) =>
            setFormData({
              ...formData,
              description: event.target.value,
            })
          }
        />
        <button onClick={handleSaveBlogToDatabase}>Add New Blog</button>
      </div>
    </div>
  );
}
