import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch,RootState } from '../store/store'
import { fetchTodos } from '../store/todod'
import { Box, Checkbox, CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';


const Todo = () => {

  const {isLoading,isError,todos}=useSelector((state:RootState)=>state.todo);
  const dispatch=useDispatch<AppDispatch>();

  
  useEffect(()=>{
     dispatch(fetchTodos());
  },[dispatch]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography variant="h6" color="error" align="center">
        Error: {isError}
      </Typography>
    );
  }

  const Completedchange=(id:number)=>{
       todos.find((todo)=>todo.id === id ? (todo.completed = !todo.completed):(todo))
  }

  return (
    <Box sx={{maxWidth:"700px",margin:"auto",padding:"20px",border:"1px solid black"}}>
      <Typography variant='h4' gutterBottom textAlign={"center"}>
        Todo List
      </Typography>
      <List>
        {todos.map((todo)=>(
          <ListItem key={todo.id}>
              <Checkbox onChange={()=>Completedchange(todo.id)}  value={todo.completed} checked={todo.completed} sx={{margin:"0px 10px"}} />
              <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Todo