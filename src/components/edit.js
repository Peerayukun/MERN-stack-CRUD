import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
const Edit=()=>{
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        if (!location.state){
            navigate('/list')
        }
        else{
            setEmail(location.state.email)
            setName(location.state.name)
            setRoll(location.state.roll)
        }
    },[location.state,navigate])
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [roll,setRoll] = useState('')
    const emailChange=(e)=>{
        setEmail(e.target.value)
    }
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const rollChange=(e)=>{
        setRoll(e.target.value)
    }
    const subM=(e)=>{
        e.preventDefault()
        const send = {email:email,name:name,roll:roll}
        axios.post('http://localhost:8080/update/'+String(location.state._id),send)
        .then(navigate('/list'))
    }
    return(
        <div>
            <h1>Edit user</h1>
            <form onSubmit={subM}>
                <div className="form-group">
                    <label>Email address</label>
                    <input value={email} onChange={emailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input value={name} onChange={nameChange} type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label>Roll</label>
                    <input value={roll} onChange={rollChange} type="text" className="form-control" id="roll" />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default Edit