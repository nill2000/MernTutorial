/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import './App.css'
import {useState, useEffect} from "react";
import Axios from "axios";

function App() {
	
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [username, setUserName] = useState("");



	useEffect(() => {
		Axios.get("http://localhost:3001/getUsers").then((response) => {
			setUsers(response.data);
		})
	}, []);

	const createUser = () => {
		Axios.post("http://localhost:3001/createUsers", {
		name, 
		age, 
		username
		}).then((response) => {
			setUsers([...users, {name, age, username}])
		});
	}
	
	return (
		<div>
			{/* Get data from db and display */}
			<div className='displayUsers'>
				{users.map((user) => {
					return (
						<div>
							<h1>User: {user.name}</h1>
							<h1>age: {user.age}</h1>
							<h1>username: {user.username}</h1>
						</div>
					)
				})}
			</div>

				{/* Post Data into db */}
			<div className='createUsers'>
				<input onChange={(event) => setName(event.target.value)} type="text" placeholder='name'/>
				<input onChange={(event) => setAge(event.target.value)} type="number" placeholder='age'/>
				<input onChange={(event) => setUserName(event.target.value)} type="text" placeholder='username'/>
				<button onClick={createUser}>Submit User</button>
			</div>
		</div>
	)
}

export default App
