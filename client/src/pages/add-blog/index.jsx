import classes from "./styles.module.css";

export default function AddNewBlog() {
  return (
    <div className={classes.wrapper}>
      <h2>Add New Blog</h2>
      <div className={classes.formWrapper}>
        <input
          type="text"
          name="title"
          placeholder="Enter blog title..."
          id="title"
        />
        <textarea
          name="description"
          placeholder="Enter blog description..."
          id="description"
          type="text"
        />
        <button>Add New Blog</button>
      </div>
    </div>
  );
}
