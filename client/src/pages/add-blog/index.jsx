import { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";

export default function AddNewBlog() {
  const { formData, setFormData } = useContext(GlobalContext);

  console.log(formData);

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
        <button>Add New Blog</button>
      </div>
    </div>
  );
}
