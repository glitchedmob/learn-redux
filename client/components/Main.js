import React from 'react';
import { Link } from 'react-router';

export const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});