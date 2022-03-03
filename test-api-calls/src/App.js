import logo from "./logo.svg";
import "./App.css";
import { Button } from 'react-bootstrap';

function App() {
	const triggerFetch = () => {
		fetch("/api/", {
			method: 'GET',
			headers:{
				'Authorization': '1234',
			  }
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Button onClick={triggerFetch}>
					Click to trigget Fetch
				</Button>
			</header>
		</div>
	);
}

export default App;
