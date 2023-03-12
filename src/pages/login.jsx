import { useNavigate } from "react-router-dom";
import '../style/login.css'


function Login(){
 
  const navigate = useNavigate()
 
   
  return(
    <>
    
    <form className="form" onSubmit={() => navigate('/characters')}>
      
      <p>вхід в додаток <h1>Rick and Morty Api</h1></p>
      <input 
        className="login"
        //value={email}  
        //onChange={(e)=> setEmail(e.target.value)}
        type= 'email' 
        placeholder="email"
        required
      />
      <input
        className="login"
        //value={password} 
        //onChange={(e)=> setPassword(e.target.value)}
        type= 'password' 
        placeholder="password"
        required
      />
          
      <button
        className="login"
        type='submit'
        >login
      </button>
          
    </form>
    </>
  )
}

export default Login;