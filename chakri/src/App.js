import React,{useState} from 'react'

const ds = () => {                  
    const [data,setData]= useState({
        username:'',
        password:''
    })
    const {username,password} = data;
    const chak = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e => {
      e.preventdefault()
      console.log(data)
    }
    return(
        <div>
            <center>
                <form>
                    <input type="text" name= "username" value={username} onChange={chak}/> <br />
                    <input type="password" name="password" value={password} onchange={chak}/> <br />
                    <input type="submit" name="submit"/>
                </form>

            </center>
        </div>
    )
}
export default ds