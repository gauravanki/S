import { useReducer } from "react";
import PostListStore from "./component";
const postlistreducer=(cur,action)=>{
    let newarr;
   if(action.type==='DELETE_POST'){
    newarr=postlist=cur.filter((post)=>{
        return(post.id!==action.payload.id);
    });
    return newarr;
   }
   //else if(action.type==='ADD_POST')
    //postlist=[...cur+{id:action.payload.id,reaction:action.payload.reaction}]
}
export const PostlistProvider=({children})=>{
const [postlist,dispatchpostlist]=useReducer(postlistreducer,DEFAULT_CONTEXT);
    const addPost=()=>{
    //const ITEM={
      //type:'ADD_POST',
    //payload:{id,reaction}
    };
    const deletePost=(id)=>{
   const ITEM=()=>({
            type: 'DELETE_POST',
            payload: { id }
        });
        dispatchpostlist(ITEM(id));
    };
return(<PostListStore.Provider value={{postlist,addPost,deletePost}}>{children}</PostListStore.Provider>)
}
const DEFAULT_CONTEXT=[{ 
    id:'1',
    reaction:'56'
},
{id:'2',reaction:'44'}];
export default PostlistProvider;