import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './Covid.css';

const Covid = ({ covid }) => {
	const { key, Country, Cases, Deaths, Region } = covid;
	return (
		<tr>
			<td>{key}</td>
			<td>{Country}</td>
			<td>{Cases}</td>
			<td>{Deaths}</td>
			<td>{Region}</td>
		</tr>

	);
};

export default Covid;