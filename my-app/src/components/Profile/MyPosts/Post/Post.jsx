import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.hollywoodreporter.com/wp-content/uploads/2021/03/MCDAVAT_FE023-H-2021-1615907634.jpg"></img>
      {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
