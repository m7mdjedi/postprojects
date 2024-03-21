import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useDispatch } from "react-redux";

export const getComments = createAsyncThunk(
  "project/getComments",

  async () => {
    // console.log('hhh1')
    const projectRef = collection(db, "comments");
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

export const Commentslice = createSlice({
  name: "project",
  initialState: {
    isLoading: "idle",
    Comments: [],
    error: null,
  },
  reducers: {
    setComments: (state, action) => {
      state.Comments = action.payload;
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
      .addCase(getComments.pending, (state) => {
        state.isLoading = "loading";
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = "succeeded";
  
        state.Comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = "failed";

        state.error = action.payload;
      });
  },
});

export default Commentslice.reducer;
export const { setError, setLoading, setComments } = Commentslice.actions;
