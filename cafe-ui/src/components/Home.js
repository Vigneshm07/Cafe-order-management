import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {startGetOrder, startRadioOrder} from "../actions/orderAction"
import HomeFilter from "./HomeFilter"

const Home = (props) => {

    const dispatch = useDispatch()
    const [add , setAdd] = useState('')

    useEffect(()=>{
        dispatch(startGetOrder())
    }, [dispatch])

    const orderList = useSelector((state)=>{
        return state.order.order
    })
    console.log(orderList)

    const handleRadio = (e) =>{
        setAdd(e.target.value)
    }

    useEffect(()=>{
        dispatch(startRadioOrder(add))
    },[dispatch, add])

    return (
        <div>
            <h2>
                <form>
                    <input type="radio" name="add" checked={add === 'Drink'} value='Drink' onChange={handleRadio}/>Drink
                    <input type="radio" name="add" checked={add === 'Food'} value='Food' onChange={handleRadio}/>Food
                </form>
                <br/>
            <table border="1" className="App">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map((ele)=>{
                            return(
                                <tr key={ele._id}>
                                    <td>{ele.name}</td>
                                    <td>{ele.type}</td>
                                    <td>{ele.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </h2>
            <br/><br/>
            

            <HomeFilter /> 
        </div>
    )
}

export default Home