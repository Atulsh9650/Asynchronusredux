import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


const initialState: StateType = {
  isLoading: false,
  todos: [],
};

export const fetchTodos = createAsyncThunk<TodoType[], void, { rejectValue: string }>(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {

      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      
      
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      const data: TodoType[] = await response.json();

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todo", 
  initialState, 
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
      state.isError = undefined; 
    });

    builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<TodoType[]>) => {
      state.isLoading = false;
      state.todos = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload; 
    });
  },
});

export default todoSlice.reducer;
