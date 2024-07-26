import React, { FormEvent, useState } from 'react'
import { useGetPostsQuery, useNewPostMutation } from './Rtkstore/api'
import Postcard from './components/Postcard';

const App = () => {
const {isLoading,isError,isFetching,isSuccess,data,error}=useGetPostsQuery("");

const [newpost]=useNewPostMutation()

const [title,settitle]=useState<string>("");
const [body,setbody]=useState<string>("");

const submithandler=(e:FormEvent<HTMLFormElement>):void=>{
   e.preventDefault();
  const post:Posttype={
   title,body,userId:Math.random()*1000,
   id:Math.random()*1000
  };
  newpost(post);
  settitle("");
  setbody("");
}
  return (


     <div>
      <h1>My App</h1>
      <form onSubmit={submithandler} style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <input type='text' placeholder='title' value={title} onChange={(e)=>settitle(e.target.value)} />
        <input type='text' placeholder='body' value={body} onChange={(e)=>setbody(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
        {
          data?.map(i=>(
            <Postcard key={i.id} post={i} />
          ))
        }
     </div>
  )
}

export default App