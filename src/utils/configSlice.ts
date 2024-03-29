import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
    showModal:boolean,
    movieId:any,
  }


  const initialState: ModalState = {
    showModal:false,
    movieId:null,
  };


  const configSlice = createSlice(
    {
        name:"config",
        initialState,
        reducers:{
            toggleModal:(state) => {
                state.showModal = !state.showModal
            },
            setMovieId:(state,action: PayloadAction<any>) => {
                state.movieId = action.payload
            }
        }
    }
  )


  export const {toggleModal,setMovieId} = configSlice.actions;
  export default configSlice.reducer;