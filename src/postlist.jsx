import { useContext } from "react";
import Post from "./Post"
import './postlist.css';
import PostListStore from "./component";
function PostList(){
    const {postlist}=useContext(PostListStore);
    return(<div className="listing">
       {postlist.map((post)=>{
        return<Post key={post.id} post={post}></Post>
       })}
    </div>);
};
export default PostList;