import { createContext } from "react";
const PostListStore = createContext({
    postlist: [],
    addPost: () => {},
    deletePost: () => {},
});
export default PostListStore;