import "../App.css";
import "../styles/checkbox.css";
import "../styles/dropdown.css";
//for checkbox css
//https://codepen.io/milanraring/pen/QWbqBGo
export default function mainTask({ mainTask, handleEditMainTask, handleClearMainTask }) {
	return (
		<div className="main-task">
			<h3>TODAY</h3>
			<div id="checklist">
				<input type="checkbox" name={mainTask.name} value={mainTask.name} />
				<label>{mainTask.name}</label>
				<div className="dropdown">
					<svg
						data-v-c8d4d4da=""
						viewBox="0 0 60 60"
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-ellipsis more-icon dash-icon"
					>
						<path
							xmlns="http://www.w3.org/2000/svg"
							d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
						></path>
					</svg>
					<ul className="dropdown-content">
						<li onClick={handleEditMainTask}>
							<span className="dropdown-list-icon-wrapper">
								<svg
									data-v-20431cdb=""
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="dropdown-list-icon icon icon-edit"
								>
									<path
										xmlns="http://www.w3.org/2000/svg"
										d="M15.067 3.986a.5.5 0 0 0-.708-.001L3.437 14.91a.5.5 0 0 0 0 .707l4.948 4.948a.5.5 0 0 0 .707 0L20.009 9.648a.5.5 0 0 0 0-.706l-4.942-4.956zM2.43 16.8a.5.5 0 0 0-.84.237L.084 23.314a.501.501 0 0 0 .603.602l6.272-1.5a.5.5 0 0 0 .237-.84L2.43 16.8zM23.2 2.924L21.077.8a2.5 2.5 0 0 0-3.532 0l-1.418 1.417a.5.5 0 0 0 0 .707l4.95 4.949a.5.5 0 0 0 .707 0L23.2 6.454a2.5 2.5 0 0 0 0-3.53z"
									></path>
								</svg>
							</span>
							Edit
						</li>
						<li onClick={handleClearMainTask}>
							<span className="dropdown-list-icon-wrapper">
								<svg
									data-v-20431cdb=""
									viewBox="0 0 212.982 212.982"
									xmlns="http://www.w3.org/2000/svg"
									className="dropdown-list-icon icon icon-delete"
								>
									<path
										xmlns="http://www.w3.org/2000/svg"
										d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
									></path>
								</svg>
							</span>
							Clear
						</li>
					</ul>
				</div>
				<br />
			</div>
		</div>
	);
}
