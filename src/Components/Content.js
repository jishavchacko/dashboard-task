import React from 'react';
import Barchart from '../Components/Chart/Barchart';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import userImage from '../avatar-3637425_640.png';

const Content = () => {
	const data = [
		{name : "Mark",status:"pause",totalUsers:189,impression:23456,conversion:2345},
		{name : "Anna",status:"active",totalUsers:189,impression:23456,conversion:2345},
		{name : "Louice",status:"active",totalUsers:189,impression:23456,conversion:2345},
		{name : "John",status:"active",totalUsers:189,impression:23456,conversion:2345},
	]
	return (
		<div id="page-content-wrapper">
			<div className="container-fluid">
				<h4 className="mt-4">Overview</h4>
				<hr />
				<Barchart />
				<div className = "pt-3">
					<Table hover responsive size="sm">
						<thead>
							<tr>
								<th>Users</th>
								<th>Status</th>
								<th>Users</th>
								<th>Impression</th>
								<th>Conversion</th>
							</tr>
						</thead>
						<tbody>
							{
								data.map((item,key) =>
									<tr key = {key}>
										<td>
											<span className = "pr-2">
												<Image src = {userImage} roundedCircle width = {30} height = {30} />
											</span>
											{item.name}
										</td>
										<td>
											{
												(item.status == "pause")
												?
													<Badge variant="warning">Pause</Badge>
												:
													<Badge variant="primary">Active</Badge>
											}
										</td>
										<td>
											{item.totalUsers}
											<br />
											<span>
												<small>Total users</small>
											</span>
										</td>
										<td>
											{item.impression}
											<br />
											<span>
												<small>Total impressions</small>
											</span>
										</td>
										<td>
											{item.conversion}
											<br />
											<span>
												<small>Converted users</small>
											</span>
											<span className="pl-4">
												<i className="fas fa-ellipsis-v"></i>
											</span>
										</td>
									</tr>
								)
							}
						</tbody>
					</Table>
				</div>
			</div>	
		</div>
	)
}

export default Content;