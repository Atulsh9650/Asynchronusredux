import React from 'react'
import { useDeletePostMutation, useUpdatePostMutation } from '../Rtkstore/api';
import { Button } from '@mui/material';

const Postcard = ({post}:{post:Posttype}) => {

    const [updatePost] = useUpdatePostMutation();
    const [deletePost] = useDeletePostMutation();
  
    const handleUpdate = (id: number) => {
      updatePost({ id, changes: { title: 'Updated Title' } });
    };
  
    const handleDelete = (id: number) => {
      deletePost(id);
    };

  return (
    <div>
     <h4>{post.title}</h4>
     <p>{post.body}</p>
     <Button onClick={() => handleUpdate(post.id)}>Update</Button>
     <Button onClick={() => handleDelete(post.id)}>Delete</Button>
    </div>
  )
}

export default Postcard