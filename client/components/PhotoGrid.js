import React from 'react';

import { Photo } from './Photo';

export const PhotoGrid = React.createClass({
	render() {
		return (
			<div className="photo-grid">
				{this.props.posts.map((post, i) => (
					<Photo
						key={i}
						index={i}
						post={post}
						{...this.props} 
					/>
				))}
			</div>
		)
	}
});