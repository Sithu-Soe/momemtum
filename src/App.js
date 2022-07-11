import "./App.css";
import { useState, useEffect } from "react";
import Main from "./components/Main";

function App() {
	const [name, setName] = useState("");
	useEffect(() => {
		if (localStorage.getItem("name")) {
			setName(localStorage.getItem("name"));
		} else {
			console.log("yep");
		}
	}, []);

  const handleNameSet = (event) => {
    if (event.key === 'Enter') {
      if(event.target.value){
        localStorage.setItem("name", event.target.value);
        setName(event.target.value);
      }
    }
  }

	return (
		<div className="App">
			<Main name={name} setUserName={handleNameSet}/>
		</div>
	);
}

export default App;
