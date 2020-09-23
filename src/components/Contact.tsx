import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import Form from './shared/Form';
import Success from './Success';

export interface ContactProps {
	path: string;
}

const Contact: React.SFC<ContactProps> = () => {
	const userData = useSelector((state: AppState) => state.success);
	
	return (
		<div className="page-contact">
			<div className="page-contact__leftSection">
				<div className="page-contact__content">
					<div className="page-contact__content page-contact__content--heading">
						<h1> Contact us </h1>
					</div>
					<p className="page-contact__content page-contact__content--text">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s.
					</p>
					{userData.name === "" ? <Form/> : <Success name={userData.name} number={userData.phoneNumber}/> }
				</div>
			</div>
			<div className="page-contact__rightSection">
				<div className="page-contact__image"></div>
			</div>
		</div>
	);
};

export default Contact;
