import React, { createContext, useContext ,useReducer, useState} from "react";

const DatastoreContext = createContext();

const initialState = {
    apploading: true,
    initializeapp:false
}
const reducer=(state,action) => {
    
    switch(action.type){
        case 'stoploading':
        return{
            initializeapp:true
        }
        case 'pre-mest':
            return{
                fullstack: true
            }
        default:
            return "Default"
    }
    // if(action.type==='loading'){
    //     return{text:"app is loading"}
    // }else{
    //     return "Default"
    // }

}
const DataStoreProvider = (props) => {
    // const{children} = prop
    const[state,dispatch]=useReducer(reducer,initialState)
    const brandname="whizzy Academy"
    return(
        <DatastoreContext.Provider value={{state,dispatch,brandname}}>
            {props.children}
        </DatastoreContext.Provider>
    )
}



const useContextStore = () => useContext(DatastoreContext);
export {DataStoreProvider,useContextStore}