import { LOGIN } from "../Actions/types"

const initialState={
    userdata:{
        name:"naveen"
    }
}
const Authreducer=(state = initialState,action)=>{
    switch (action.type){
        case LOGIN:
            return({
                ...state,
                userdata:action.payload
            })
        default:
            return state
    }
}
export default Authreducer