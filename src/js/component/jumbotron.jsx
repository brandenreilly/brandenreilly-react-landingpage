import React from "react";

const jumboHeaderStyling = {
	fontSize: "58px",
	marginTop: "50px"
}
const jumboFooterStyling = {
	marginBottom: "20px"
}

const Jumbotron = () => {
	return( <div className="jumboStyling h-100 border rounded-3">
				<div className="jumboWrap">
					<h2 style={jumboHeaderStyling}>A Warm Welcome!</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>	
					<button className="btn btn-primary" style={jumboFooterStyling}>Call to Action!</button>
				</div>
			</div>	
);};

export default Jumbotron;