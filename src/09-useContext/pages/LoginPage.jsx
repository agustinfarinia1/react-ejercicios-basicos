import { useContext } from "react";
import { UserContext } from "../context/UserContext"

export const LoginPage = () => {

  const {user,setUser} = useContext(UserContext);


  return (
    <div>LoginPage

      <pre aria-label="pre">
          {JSON.stringify(user,null,3)}
      </pre>
      <button 
        className="btn btn-primary" 
        onClick={() => setUser({id:1,name:'agus',email:'agus@gmail.com'})}>
          Loguear
      </button>
    </div>
  )
}
