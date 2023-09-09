const initialValue = {
    order : [] ,
    filter : [] ,
    iddata : [] ,
    error : {} ,
    added : {} ,
    message : {}
}

const orderReducer = (state = initialValue, action)=>{
    switch(action.type){
        case "GET_ORDER" : {
            return {...state , order : action.payload}
        }
        case "SET_DATA" : {
            return {...state , iddata :[...state.iddata , action.payload]}
        }
        case "FILTER_ORDER" : {
            return {...state , filter : action.payload}
        }
        case "ID_ORDER" : {
            return {...state ,  iddata: action.payload}
        }
        case "CHECKED_TRUE" : {
            return { ...state , iddata: state.iddata.filter((ele)=>{
                return ele._id !== action.payload._id
            })}
        }
        case "FILTER_RADIO" : {
            return {...state , order : action.payload}
        }
        case "MESSAGE" : {
            return {...state , message : action.payload}
        }
        case "MESSAGE_ID" : {
            return {...state , added : action.payload}
        }
        case "ERROR" : {
            return {...state , error : action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default orderReducer