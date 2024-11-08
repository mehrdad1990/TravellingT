"use client"

import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   destination:null,
   days:null,
   dateTo:null,
   dateFrom:null,
   clicked:false
   }
   
   export const FormData = createSlice({
   
       name:'form',
       initialState,
       reducers:{
        Destination(state,action) {
            state.destination=action.payload
          },
          Days(state,action) {
            state.days=action.payload
          },
          DATETO(state,action) {
            state.dateTo=action.payload
          },
          DATEFROM(state,action) {
            state.dateFrom=action.payload
          },
          Button(state,action) {
            state.clicked=action.payload
          },
         
      
       },
   
   })
    export default FormData.reducer
    export const { Destination, Days,DATETO , DATEFROM,Button} = FormData.actions