import React from 'react';
import Sidebar from '../Components/Sidebar';
import Content from '../Components/Content';
 
const Dashboard = () => {
	return (
		<div className="d-flex" id="wrapper">
			<Sidebar />
			<Content />
		</div>
	)
}

export default Dashboard;