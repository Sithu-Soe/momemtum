import "../App.css";
import { useEffect, useState } from "react";
import MainTask from "./MainTask";
export default function Main({ name, setUserName }) {
	const [mainTask, setMainTask] = useState({
		name: "",
		isEditing: false,
	});
	useEffect(() => {
		if(localStorage.getItem("mainTask")){
			const gotTask = JSON.parse(localStorage.getItem("mainTask"));
			setMainTask({
				name: gotTask.name,
				isEditing: false,
			});
		}
		
	}, []);
	const handleSetMainTask = (event) => {
		if (event.key === "Enter") {
			if (event.target.value) {
				setMainTask((prevState) => ({
					name: event.target.value,
					isEditing: false,
				}));
				localStorage.setItem("mainTask", JSON.stringify({name: event.target.value, isEditing: false}));
			}
		}
	};
	const handleEditMainTask = (event) => {
		setMainTask((prevState) => ({
			...prevState,
			isEditing: true,
		}));
	};

	const handleClearMainTask = (event) => {
		setMainTask((prevState) => ({
			...prevState,
			name: "",
		}));
		localStorage.removeItem("mainTask");
	}
	const NameComponent = (
		<>
			<h1>Good Morning, {name}.</h1>
			<h3>What is your main focus for today?</h3>
			{mainTask.name && !mainTask.isEditing ? (
				<MainTask mainTask={mainTask} handleEditMainTask={handleEditMainTask} handleClearMainTask={handleClearMainTask} />
			) : (
				<input
					defaultValue={mainTask.name}
					type="text"
					autoComplete="off"
					className="focus-input"
					onKeyDown={handleSetMainTask}
				></input>
			)}
		</>
	);
	const NoNameComponent = (
		<>
			<h1>What should we call you, stranger?</h1>
			<input
				defaultValue={name}
				type="text"
				autoComplete="off"
				className="focus-input"
				onKeyDown={setUserName}
			></input>
		</>
	);
	return (
		<div className="center-content">
			{name ? NameComponent : NoNameComponent}
		</div>
	);
}
