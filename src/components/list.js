import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const List=()=>{
    const navigate = useNavigate()
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/list')
        .then(res=>{setUsers(res.data)})
    },[])
    const Row=(props)=>{
        const del=()=>{
            if(window.confirm('sure?')){
                axios.get('http://localhost:8080/del/'+String(props.p._id))
                .then(()=>{window.location.reload(false)})
            }
        }
        const edit=()=>{
            navigate('/edit',{state:props.p})
        }
        return (
            <tr>
                <td>{props.p.email}</td>
                <td>{props.p.name}</td>
                <td>{props.p.roll}</td>
                <td><button className="btn btn-danger" onClick={del}>del</button></td>
                <td><button className="btn btn-primary" onClick={edit}>edit</button></td>
            </tr> 
        )
    }
    return(
        <div>
        <h1>List user</h1>
        <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>email</th>
                        <th>name</th>
                        <th>roll</th>
                        <th>del</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <Row p={user} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List