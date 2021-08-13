import React, { useState } from 'react';
import { auth } from '../../configs/firebase';

export default function SignUp() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState({ code: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  }

  const handleSignUp = async () => {
    try {
      const { email, password } = user;
      const authenticatedUser = await auth.createUserWithEmailAndPassword(email, password);
      console.log(authenticatedUser);
    } catch (error) {
      console.log(error);
      setErrorMsg({ code: error.code, message: error.message })
    }
  }

  const { email, password } = user;
  console.log(errorMsg)
  return (
    <div>
      <h2>Sign up</h2>
      {errorMsg.message && <em>{errorMsg.message}</em>}
      <p>
        <label htmlFor="">Email</label>
        <input type="email" name="email" onChange={handleInputChange} />
      </p>
      <p>
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={handleInputChange} />
      </p>
      <p>
        <button disabled={!email && !password} onClick={handleSignUp}>Sign up</button>
      </p>
    </div>
  )
}
