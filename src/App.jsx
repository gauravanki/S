import Header from "./header"
import Sidebar from "./Sidebar"
//import Footer from "./footer" 
import CreatePost from "./createpost"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import PostList from "./postlist"
import PostlistProvider from "./postliststore";
import PostListStore from "./component";
function App() {
  const [curtab,settab]=useState("Home");
  return(<PostlistProvider><div className="tags">
    <Sidebar settab={settab} curtab={curtab}></Sidebar>
    <div className="div2">
    <Header></Header>
    {curtab==="Home"?<PostList></PostList>:<CreatePost></CreatePost>}
    </div>
  </div></PostlistProvider>)
}
export default App;
