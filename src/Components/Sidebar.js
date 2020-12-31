import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import userpic from '../avatar-3637425_640.png';
 
const Sidebar = () => {
	return (
		<div className="border-right" id="sidebar-wrapper">
			<div className="sidebar-heading m-auto text-center">
				<Image src={userpic} width = "100" height = "100" roundedCircle />
				<div>Michael Akiston</div>
				<div>
					<Button variant = "link">My Profile</Button>
				</div>
				<hr />
			</div>
			<div className="list-group list-group-flush pb-4">
				<span className="pl-4 menu">
					Menu
				</span>
				<a href="#" className="list-group-item list-group-item-action">
					<i className="fas fa-at"></i>
					<span className="pl-2">	Inbox </span>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<i className="far fa-paper-plane"></i>
					<span className="pl-2">Sent</span>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<i className="far fa-edit"></i>
					<span className="pl-2">Drafts</span>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<i className="fas fa-trash"></i>
					<span className="pl-2">Deleted</span>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<i className="far fa-star"></i>
					<span className="pl-2">Favourite</span>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<i className="fas fa-chart-pie"></i>
					<span className="pl-2">Analytics</span>
				</a>
				<a href="#" className="list-group-item list-group-item-action">
					<i className="fas fa-cog"></i>
					<span className="pl-2">	Settings</span>
				</a>
			</div>
			<div className = "footer w-100 pr-4">
				<div className = "pt-4 pl-4 pb-2">
					<Button size = "sm" className = "w-100" variant="primary">
						Upgrade Plan
					</Button>
				</div>
				<div className = "pl-4 pb-4">
					<button variant="none" className = "w-100 support-btn">
						Contact Support
					</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;