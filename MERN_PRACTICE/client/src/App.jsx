import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name,setName] = useState();
  const [age,setAge] = useState();


  const submit = () => {
    
    axios.post("http://localhost:3000/createUser",{name,age})
    .then((users)=>{
      console.log(users)
    }).catch(err =>console.log(err))
  }
  useEffect(() => {
    axios.get('http://localhost:3000/getUsers')
      .then((users) => {
        setUsers(users.data);
      }).catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='centre'>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
          </div>
        )
      })}
      <br />
      <br />
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={submit}>Create User</button>
    </div>
  );
}

export default App;
