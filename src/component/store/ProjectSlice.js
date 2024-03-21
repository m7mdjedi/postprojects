import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useDispatch } from "react-redux";

export const getProjects = createAsyncThunk(
  "project/getProjects",

  async () => {
    // console.log('hhh1')
    const projectRef = collection(db, "projects");
    try {
      const querySnapshot = await getDocs(projectRef);
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
     
      return newData;
    }catch(error) {
    //  console.log(error, "hhh6");
      return error;
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    isLoading: "idle",
    projects: [],
    error: null,
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state) => {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.isLoading = "loading";
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = "succeeded";
  
        state.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = "failed";

        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
export const { setError, setLoading, setProjects } = projectSlice.actions;
