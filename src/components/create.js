import { useState } from "react"
import axios from "axios"

const Create=()=>{
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
        axios.post('http://localhost:8080/create',send)
        .then(()=>{
            setEmail('')
            setName('')
            setRoll('')
        })
    }

    return(
        <div>
            <h1>Create user</h1>
        <form onSubmit={subM}>
        <div className="form-group">
            <label>Email address</label>
            <input value={email} onChange={emailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Name</label>
            <input value={name} onChange={nameChange} type="text" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
            <label>Roll</label>
            <input value={roll} onChange={rollChange} type="text" className="form-control" id="roll" placeholder="Roll no." />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default Create