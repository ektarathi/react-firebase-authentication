import * as React from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import firebase from "../firebaseConfig.js";
import Button from "./shared/FormButton";

export interface HeaderProps {}
const NavLink = (props: any) => (
	<Link
		{...props}
		getProps={({ isCurrent }) => {
			// the object returned here is passed to the
			// anchor element's props
			return {
				style: {
                    color: isCurrent ? "#67686b" : "#767676",
				},
			};
		}}
	/>
);

const Header: React.SFC<HeaderProps> = () => {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	React.useEffect(() => {
		firebase.auth().onAuthStateChanged((user: any) => {
            if (user) { setIsLoggedIn(true);} 
            else { setIsLoggedIn(false)}
        })
	})

	const handleLogin = () => {
		navigate(`/`);
	}

	const handleLogout = () => {
		firebase.auth().signOut().then(function() {
			// Sign-out successful.
			navigate(`/`);
		}).catch(function(error:any) {
			// An error happened.
			console.log(error);
		});
	}

	return (
		<header>
			<nav className="nav-container">
				<div className="nav-container__left">
					<NavLink to={"home"}>
						<div className="logo"></div>
					</NavLink>
				</div>
				<div className="nav-container__right">
					<ul className="nav-menu">
						<li className="nav-menu--list-item">
							<NavLink to={"home"} className="nav-menu--link">
								HOME
							</NavLink>
						</li>
						<li className="nav-menu--list-item">
							<NavLink to={"about-us"} className="nav-menu--link">
								ABOUT US
							</NavLink>
						</li>
						<li className="nav-menu--list-item">
							<NavLink to={"contact-us"} className="nav-menu--link">
								CONTACT US
							</NavLink>
						</li>
						{isLoggedIn ? 
						<Button
							className="button button__blueButton"
							text="Logout"
							onClick={handleLogout}
						/>: 
						<Button
							className="button button__whiteButton"
							text="Login"
							onClick={handleLogin}
						/>}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
