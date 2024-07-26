/// <reference types="vite/client" />

type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  
  interface StateType {
    isError?: string;
    isLoading: boolean;
    todos: TodoType[];
  }
  

type Posttype={
    title:string,
    body:string,
    userId:number,
    id:number
}