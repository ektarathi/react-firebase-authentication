import * as React from "react";
import { Link } from "@reach/router";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";
import firebase from "../../firebaseConfig.js";
export interface PasswordResetProps {
	path: string;
}

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

const PasswordReset: React.SFC<PasswordResetProps> = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (formData: any, e: any) => {
		e.preventDefault();
		var auth = firebase.auth();
		var emailAddress = formData.email;
		auth.sendPasswordResetEmail(emailAddress).then(function() {
			// Email sent.
			console.log('Email Sent');
			navigate(`login`);
		}).catch(function(error:any) {
			// An error happened.
			console.log(error);
		});
	};

	return (
		<div className="page-password">
			<div className="page-password__leftSection">
				<div className="page-password__content">
					<div className="page-password__content page-password__content--heading">
						<h1> Reset your Password </h1>
					</div>
					<br />
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="page-contact__form page-contact__form--block">
							<label htmlFor="email" className="formLabel">
								Email Address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Eg: frau.smith@abc.com"
								className="formField"
								ref={register({
									required: true,
									pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								})}
							/>
							<span className="error">
								{errors.email && <span>Email address is invalid</span>}
							</span>
						</div>
						<button className="button button__loginButton">
							Send me a reset link
						</button>
					</form>
					
                    <div className="text-center">
                        <NavLink to={"/login"}>back to sign in page</NavLink>
                    </div>
				</div>
			</div>
			<div className="page-password__rightSection">
				<div className="page-password__image"></div>
			</div>
		</div>
	);
};

export default PasswordReset;
