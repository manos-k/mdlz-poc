import logo from "./logo.svg";
import "./App.css";
import { Button } from 'react-bootstrap';
import { useState } from "react";

function App() {
	const [apiResponse, setApiResponse] = useState("");
	const triggerFetch = () => {
		fetch("/api/", {
			method: 'GET',
			headers:{
				'Authorization': '1234',
			  }
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json)
				setApiResponse(JSON.stringify(json))
			});
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Hey Team!</h1>
				<img src={logo} className="App-logo" alt="logo" />
				<Button onClick={triggerFetch}>
					Click to trigget Fetch
				</Button>
				<h6>{apiResponse}</h6>
			</header>
		</div>
	);
}

export default App;
