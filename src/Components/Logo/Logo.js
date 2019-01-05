import React from 'react';
import Tilt from 'react-tilt';
import idea from './idea.png';
import './Logo.css';
 
const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"> 
 					<img style={{paddingTop: '5px'}} alt='logo' src={idea}/> 
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;