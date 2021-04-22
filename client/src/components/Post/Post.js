import style from './Post.module.css';

function Post(props) {
  return (
    <div className={style.post}>
      <img src="/blue-origami-bird.png" alt="" />
      <p className={style.description}>
        {props.posts.description}
      </p>
      <div>
        <span><small>Author:</small>
          {props.posts.author}
        </span>
      </div>
    </div>
  );
}

export default Post;