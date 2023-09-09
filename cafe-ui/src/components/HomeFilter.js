import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCheckedId, startGetIdData, startPostData, startSearchOrder } from "../actions/orderAction"

const HomeFilter = (props) => {

    const [ selected , setSelected ] = useState(false)
    const [search , setSearch] = useState('')

    const dispatch = useDispatch()

    const filterList = useSelector((state)=>{
        return state.order.filter
    })
    console.log("filter",filterList)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(()=>{
        dispatch(startGetIdData())
    },[dispatch])

    useEffect(()=>{
        if(search.length >= 3){
            dispatch(startSearchOrder(search))
        }
    }, [search])

    const idData = useSelector((state)=>{
        return state.order.iddata
    })
    console.log("id data",idData)

    const post = useSelector((state)=>{
        return state.order.iddata
    })
    console.log( "post" , post)

    const handleClick = (id) => {
        const formData = {
            itemId: id._id,
            name : id.name ,
            type : id.type,
            price : id.price
        }
        dispatch(startPostData(formData))
        setSearch('')
    }

    const message = useSelector((state)=>{
        return state.order.message
    })
    console.log(message)

    const added = useSelector((state)=>{
        return state.order.added
    })
    console.log(added)

    const amount = post.map((ele)=>{
        return ele.price
    })
    console.log(amount)

    const sum = amount.reduce((a , b)=>{
        return a + b
    } , 0)
    console.log(sum)

    const errors = useSelector((state)=>{
        return state.order.error
    })
    console.log(errors)

    useEffect(()=>{
        if(selected === true){
            setSelected(false)
        }
    }, [selected])

    

    return(
        <div>
            <form>
                <input type="text" value={search} onChange={handleChange} placeholder="Search by name" />
            </form>
            <br/>
            
            { search.length >= 3 && filterList &&
                filterList.map((ele)=>{
                    return <h2>{ele.name} <button onClick={()=>{handleClick(ele)}}>Add</button></h2>
                })
            }
            <br/>
            {
                errors.message && <span>{errors.message}</span>
            }
            <br/>
            {
                message.message ? <h3>{message.message} </h3> : <h3>{added.message}</h3>
            }
            {
                post && 
                <div>
                {post.map((ele , i)=>{
                    return (
                        <h2>
                            {i + 1}  {ele.name}
                            {
                                i+1 === 1 && 
                                <input type="checkbox" checked={selected === true} onChange={(e)=>{
                                setSelected(e.target.checked)
                                dispatch(startCheckedId(ele._id))
                            }}/>
                            }
                        </h2>
                )})}
                </div>
            }
            {
                post.length > 0 &&
                <h2>Amount Due = {sum}</h2>
            }
           
        </div>
    )
}

export default HomeFilter