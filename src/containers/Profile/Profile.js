import React, { useEffect, useState } from 'react';
import { auth } from '../../configs/firebase';

export default function Profile(props) {
  console.log(props)
  const [user, setUser] = useState({
    email: '',
    password: '',
    displayName: '',
    photoURL: '',
  });

  const fetchCurrentUserData = () => {
    const user = props.currentUser;
    if (user) {
      var uid = user.uid;
      console.log('USERR', user);
      setUser(state => ({
        ...state,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }))
    } else {
      console.log('NO USER');
      setToken(null);
    }
  }

  useEffect(() => {
    fetchCurrentUserData();
  }, [props.currentUser]);

  const [errorMsg, setErrorMsg] = useState({ code: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  }

  const handleUpdate = async () => {
    try {
      const { photoURL, displayName } = user;
      const authenticatedUser = await auth.currentUser.updateProfile({
        displayName,
        photoURL
      });
      console.log(authenticatedUser);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(errorMsg)

  return (
    <div>
      <img src={user.photoURL} width="200" alt="" />
      <h2>My profile</h2>
      {errorMsg.message && <em>{errorMsg.message}</em>}
      <p>
        <label htmlFor="">Display name</label>
        <input type="text" value={user.displayName} name="displayName" onChange={handleInputChange} />
      </p>
      <p>
        <label htmlFor="">Photo</label>
        <input type="url" value={user.photoURL} name="photoURL" onChange={handleInputChange} />
      </p>
      <p>
        <button onClick={handleUpdate}>Update</button>
      </p>
    </div>
  )
}
