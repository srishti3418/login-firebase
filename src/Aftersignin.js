import React from 'react';

const Aftersignin = (props) => {
	const {
		handleLogout
	} = props;

	return(
		<section className = "hero">
			<nav>
				<h2>Signedin successfully!</h2>
				<button onClick = {handleLogout}>Signout</button>
			</nav>
		</section>
		)
}

export default Aftersignin;