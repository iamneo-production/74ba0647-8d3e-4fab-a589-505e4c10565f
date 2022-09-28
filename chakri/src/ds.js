import React,{useState} from 'react'

const ds = () => {
    const [data,setData]= useState({
        username:'',
        password:''
    })
    const {username,password} = data;
    const changehandler = e => {
        setData9({...data,[e.target.name]:[e.target.value]})
    }
    return(
        <div>
            <center>
                <form>
                    <input type="text" name= "username" value={username}/>
                    <input type="password" name="password" value={password}/>
                    <input type="submit" name="submit"/>
                </form>

            </center>
        </div>
    )
}
export default ds