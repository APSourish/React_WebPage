function Login(){
    return(
        <>
        <div className='LoginPage' >
            <div className="LoginContent" >
                <h1>Login</h1>
                <input type="email" placeholder="Email Id"/><br/><br/>
                <input type="password" placeholder="Password" /><br/><br/>
                <button type="submit" >Next</button><br/><br/>
                <button className='ForgetPass' >Forget password</button>
                <button className="CreateAcc" >Create Account</button>
            </div>
        </div>
        </>
    )
}
export default Login;