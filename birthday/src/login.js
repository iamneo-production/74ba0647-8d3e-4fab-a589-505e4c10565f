import { useRef, useState, useEffect } from 'react';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef(); 

    const [user, setUser] = useState('');
    const [pwd, setpwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    },[user,pwd])
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setpwd('');

        setSuccess(true);
    }

    return (
        <>
        (success ? (
            <section>
                <h1>You are logged in!</h1>
                <br/>
                <p>
                    <a href="a">Go to Home</a>
                </p>
            </section>
                
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live="assertive"> errMsg} </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlfor="username">username:</label>
            <input type="text"
            id = "username"
            ref={userRef}
            autocomplete="off"
            onChange ={(e) => setUser(e.target.value)}
            value = {pwd}
            required
            />
            <button>Sign In</button>
        </form>
        <p>
            Need an Account?<br/>
            <span className="line">
                {/*put router link here*/}
                <a href ="a" Sign Up></a>
            </span>
        </p>
        </section>
        )}
    </>
    )
}
export default Login