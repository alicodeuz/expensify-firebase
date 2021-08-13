import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../configs/firebase';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const fetchClients = async () => {
    try {
      const res = await db.collection('clients').get();
      const data = res.docs.map(item => ({ ...item.data(), id: item.id }));
      setClients(data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchChanges = async () => {
    try {
      await db.collection('clients').orderBy('createdAt', 'desc').onSnapshot(data => {
        const response = data.docs.map(item => ({ ...item.data(), id: item.id }));
        console.log(response)
        if (response.length) {
          setClients(response)
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchChanges();
    fetchClients();
  }, []);

  const handleDelete = useCallback(async (id) => {
    try {
      const res = await db.collection('clients').doc(id).delete();
      console.log(res);
      // fetchClients();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Link to="/clients/add">Add Client</Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Full name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map(item => {
              const { id, phone, address, firstName, lastName, email, createdAt } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{firstName} {lastName}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                  <td>{new Date(createdAt.seconds * 1000).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/clients/${id}/edit`}>Edit</Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>
  )
}
