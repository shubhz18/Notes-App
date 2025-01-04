import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';
import Home from '../assets/components/Home';
import { toast } from 'react-toastify';

const initialState={
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    :[]
};


export const pasteslice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addtoPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("paste successfully added");
    },
    UpdateToPastes: (state,action) => {
      const paste=action.payload;
      const index=state.pastes.findIndex((item)=>
      item.id===paste.id);

      if(index>=0)

         state.pastes[index]=paste;
          localStorage.setItem("pastes",JSON.stringify(state.pastes));
          toast.success("Paste Update Sucessfully")
    
    },
    resetAllPastes: (state, action) => {
      state.pastes=[];
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
    },
    removeFromPastes:(state,action)=>{
        const pasteid = action.payload;
        const index = state.pastes.findIndex((item) => {
          return item.id === pasteid;
        });
        if (index >= 0) {
          state.pastes.splice(index, 1);
          localStorage.setItem("pastes", JSON.stringify(state.pastes));
          toast.success("Paste Removed Sucessfully");
        }
      },
    },
})

export const { addtoPastes, UpdateToPastes, resetAllPastes,removeFromPastes } =pasteslice.actions

export default pasteslice.reducer;