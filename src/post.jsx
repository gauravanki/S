import { MdDelete } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import "./post.css";
import { useContext } from "react";
import PostListStore from "./component";
const Post=({post})=>{
  const {deletePost}=useContext(PostListStore);
  console.log(post.id);
    return(<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <span class="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle p-2" onClick={deletePost()}>
    <span><MdDelete></MdDelete></span>
  </span>
    <p className="card-text">{post.id}</p>
    <p className="card-text">{post.reaction}</p>
    <button className="btn btn-light rounded-pill px-3" type="button"><BiLike></BiLike></button>
    <button className="btn btn-light rounded-pill px-3" type="button"><FaRegComment></FaRegComment></button>
    <button className="btn btn-light rounded-pill px-3" type="button"><PiShareFatLight></PiShareFatLight></button>
    <nav class="navbar sticky-bottom bg-body-tertiary">
    <a class="bottom-bar" href="#">Liked by ......&54others</a>
</nav>
  </div>
</div>)
}
export default Post;