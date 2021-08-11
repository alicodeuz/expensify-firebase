import React, { useCallback, useState } from 'react';
import app, { db } from '../../configs/firebase';

export default function Add() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setData(data => ({ ...data, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const requestData = { ...data, createdAt: new Date() }
      const res = await db.collection('clients').add(requestData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <input type="text" hidden />
        <input type="text" hidden />
        <input type="text" hidden />
        <input type="text" hidden />
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">First name</label>
          <input
            value={data.firstName}
            onChange={handleInput}
            name="firstName"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Last name</label>
          <input
            value={data.lastName}
            onChange={handleInput}
            name="lastName"
            className="form-control"

          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Phone</label>
          <input
            value={data.phone}
            onChange={handleInput}
            type="phone"
            name="phone"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Email</label>
          <input
            value={data.email}
            onChange={handleInput}
            type="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">Address</label>
          <input
            value={data.address}
            onChange={handleInput}
            name="address"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  )
}
