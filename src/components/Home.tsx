import * as React from "react";
import { navigate } from "@reach/router";
import ListItemText from "./ListItemText";
import Button from "./shared/FormButton";
import Carousel from './Carousel';
import firebase from "../firebaseConfig.js";

export interface HomeProps {
	path: string;
}

const Home: React.SFC<HomeProps> = () => {
	const handleSubmit = () => {
		navigate(`contact-us`);
	};

	const handleLogin = () => {
		navigate(`/`);
	};
	
	const learnMore = () => {
		navigate(`about-us`);
	};
	
	return (
		<div className="page-home">
			<Carousel/>
			<section className="page-home__section">
				<div className="page-home__section--leftSection">
					<h2 className="page-home__section page-home__section--heading">
						What is Lorem Ipsum
					</h2>
					<p className="page-home__section page-home__section--text">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here', making it look like readable English.
					</p>
					<ListItemText />
					<div className="page-home__section page-home__section--button">
						<Button
							className="button button__blueButton"
							text="Learn more"
							onClick={learnMore}
						/>
					</div>
				</div>
				<div className="page-home__section--rightSection">
					<div className="page-home__section--rightSection-image "></div>
				</div>
			</section>
			<section className="page-home__section page-home__section--image">
				<div className="page-home__section--leftSection">
					<div className="page-home__section--leftSection-dark">
						<h2 className="page-home__section page-home__section--heading">
							Einige Fragmente erinnern jedoch deutlich an Zeilen
						</h2>
						<p className="page-home__section page-home__section--text">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using 'Content here,
							content here', making it look like readable English.
						</p>
						<div className="page-home__section page-home__section--button">
							<Button
								className="button button__whiteButton"
								text="Log In"
								onClick={handleLogin}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="page-home__section">
				<h2>Die Wortfügung wurde gebildet aus dem lateinischen do‌lōrem</h2>
				<p>
					Griechisch und Armenisch, da sich die Alphabete dieser Sprachen für
				</p>
				<div className="page-home__block">
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text. All the Lorem Ipsum generators on the Internet tend
						to repeat predefined chunks as necessary.
					</p>
				</div>
				<div className="page-home__block">
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text. All the Lorem Ipsum generators on the Internet tend
						to repeat predefined chunks as necessary.Various versions have evolved 
						over the years, sometimes.
					</p>
				</div>
				<div className="page-home__block">
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable.
					</p>
					<br />
					<p>
						It uses a dictionary of over 200 Latin words, combined with a
						handful of model sentence structures, to generate Lorem Ipsum which
						looks reasonable.
					</p>
				</div>
			</section>
			<section className="page-home__contactUs">
				<Button
						className="button button__blueButton"
						text="Contact us"
						onClick={handleSubmit}
				/>
			</section>
		</div>
	);
};

export default Home;
