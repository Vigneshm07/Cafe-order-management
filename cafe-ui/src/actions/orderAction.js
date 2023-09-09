import { message } from "antd"
import axios from "axios"

export const startGetOrder = () => {
    return (dispatch) => {
        axios.get("http://localhost:3075/api/orders")
            .then((response) => {
                const list = response.data
                //console.log("Order List", list)
                dispatch(setGetOrder(list))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const setGetOrder = (data) => {
    return {
        type : "GET_ORDER",
        payload : data
    }
}

export const startSearchOrder = (search) => {
    return(dispatch)=>{
        axios.get(`http://localhost:3075/api/orders/${search}`)
        .then((response) => {
            const list = response.data
            console.log("Filter List", list)
            if(list.hasOwnProperty("message")){
                dispatch(setError(list))
            } else {
                dispatch(setGetFilterOrder(list))
                dispatch(setError({}))
            }

        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

const setError = (data) => {
    return {
        type : "ERROR",
        payload : data
    }
}

const setGetFilterOrder = (data) => {
    return {
        type : "FILTER_ORDER",
        payload : data
    }
}

export const startGetIdData = () => {
    return(dispatch)=>{
        axios.get("http://localhost:3075/api/ordersAdd")
        .then((response) => {
            const list = response.data
            console.log("Id List", list.order)
            dispatch(setGetIdOrder(list))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startPostData = (formData) => {
    console.log(formData)
    return(dispatch) => {
        axios.post('http://localhost:3075/api/ordersPost' , formData)
            .then((response)=>{
                const data = response.data
                console.log("Post" , data)
                dispatch(setData(data.order))
                dispatch(setIdMessage(data))
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
}

const setData = (data) => {
    return{
        type : "SET_DATA" , 
        payload : data
    }
}

const setIdMessage = (data) => {
    return{
        type:"MESSAGE_ID",
        payload :data
    }
}

const setGetIdOrder = (data) => {
    return {
        type : "ID_ORDER",
        payload : data
    }
}

export const startCheckedId = (id) => {
    //console.log(id)
    return(dispatch)=>{
        axios.get(`http://localhost:3075/api/ordersChecked/${id}`)
        .then((response) => {
            const list = response.data
            //console.log("checked", list)
            dispatch(setCheckedId(list.order))
            dispatch(setMessage(list))
            
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

const setMessage = (data) => {
    return{
        type:"MESSAGE",
        payload :data
    }
}

const setCheckedId = (id) => {
    return {
        type : "CHECKED_TRUE",
        payload : id
    }
}

export const startRadioOrder = (value) => {
    //console.log(value)
    return(dispatch)=>{
        axios.get(`http://localhost:3075/api/ordersRadio/${value}`)
        .then((response) => {
            const list = response.data
            //console.log("Radio List", list)
            dispatch(setGetRadioOrder(list))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

const setGetRadioOrder = (data) => {
    return {
        type : "FILTER_RADIO",
        payload : data
    }
}
