import { createStore } from "redux";

const store = createStore(
    function(state, action){
        console.log(action.type);
    if(action.type === "callWindowToggle"){
        console.log(action.type);
        return{
            ...state,
            callWindowStatus:action.payload,
        }
    }

    return{
        ...state
    }
},
{
    callWindowStatus:false,
})

export default store
