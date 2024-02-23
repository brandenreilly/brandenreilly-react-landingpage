import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardTest from "./cardtest.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return  <div>
				<NavBar />
				<Jumbotron />
				<div className="row">
					<div className="col-sm"><CardTest
					    borderColor="blue"
						color="red"
						title="First card" 
						text="first text" 
						imgURL="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg"
						/></div>
					<div className="col-sm"><CardTest borderColor="green" color="blue" title="Second card" text="second text" imgURL="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg"/></div>
					<div className="col-sm"><CardTest borderColor="yellow" color="green" title="Third card" text="third text" imgURL="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg"/></div>
					<div className="col-sm"><CardTest borderColor="red" color="yellow" title="Fourth card" text="fourth text" imgURL="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg"/></div>
				</div>
					<Footer/>
			</div>
}

export default Home;