import React, { useState} from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='Username' name='username' onChange={handleChange} />
            <input type='password' placeholder='Password' name='password' onChange={handleChange} />
            <button className='login-btn' onSubmit={handleSubmit}>Login</button>
    
            <span>Don't you have an account?<Link to ='/register'>Register</Link></span>
        </form>
    </div>
  )
}
}

export default Login