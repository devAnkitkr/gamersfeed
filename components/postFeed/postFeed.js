import PostCard from "../postCard/postCard";
import classes from "./postFeed.module.scss";

export default function postFeed({ posts }) {
  return (
    <div className={classes.postfeed}>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
}
