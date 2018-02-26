import React from "react";
import TiShoppingCart from "react-icons/lib/ti/shopping-cart";
import './Nav.css'

function Nav({active, toggleHam}) {
	return (
		<div className="nav-bar">
			<button onClick={toggleHam} className={active ? "hamburger hamburger--squeeze is-active" : "hamburger hamburger--squeeze"} type="button">
				<span className="hamburger-box">
					<span className="hamburger-inner" />
				</span>
			</button>
			<div id="mobile-logo"></div>
			<TiShoppingCart fill="white" style={{height: "30px", width: "30px", strokeWidth: "2px", fill: "#ae8648", transform: "scaleX(-1)"}}/>
		</div>
	);
}

export default Nav;
