import * as React from 'react';
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
import { useForm } from "react-hook-form";
import firebase from "../../firebaseConfig.js";
export interface SignupPageProps {
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

const SignupPage: React.SFC<SignupPageProps> = () => {
    const { register, handleSubmit, errors } = useForm({
		shouldFocusError: true,
    });

	const onSubmit = (formData: any, e: any) => {
        e.preventDefault();
        let email = formData.email;
        let password = formData.userPassword
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error: any) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        })
        navigate(`/login`);
    };

	return (
		<div className="page-signup">
			<div className="page-signup__leftSection">
				<div className="page-signup__content">
					<div className="page-signup__content page-signup__content--heading">
						<h1> Sign Up </h1>
					</div>
					<p className="page-signup__content page-signup__content--text">
						Please login by entering details in the form. Once we get the
						information, our support team will contact you shortly regarding
						payment options.
					</p>
					<form onSubmit={handleSubmit(onSubmit)}>
                        <div className="page-contact__form page-contact__form--block">
                            <label htmlFor="name" className="formLabel">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Please enter full name"
                                className="formField"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: "name is required",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Full Name should be minimum length of 10",
                                    },
                                })}
                            />
                            <span className="error">{errors.name && errors.name.message}</span>
                        </div>
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
                            <span className="error">{errors.email && <span>Email address is invalid</span>}</span>
						</div>
                        <div className="page-contact__form page-contact__form--block">
                            <label htmlFor="userPassword" className="formLabel">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="formField"
                                name="userPassword"
                                placeholder="Please enter password"
                                id="userPassword"
                                ref={register({
                                    required: true,
                                    minLength: 3,
                                    maxLength: 10,
                                })}
                            />
                            <button className="button button__loginButton">
                                Sign Up
                            </button>
                            <span className="error">{errors.userPassword && "Password length is not correct"}</span>
                        </div>
					</form>
					<p className="text-center">or</p>
					<button className="button button__whiteButton">
						Sign in with Google
					</button>
                    <p className="text-center">
                        Already have an account?{" "}
                        <NavLink to={"/login"}>
                            Sign in here
                        </NavLink>
                    </p>
				</div>
			</div>
			<div className="page-login__rightSection">
				<div className="page-login__image"></div>
			</div>
		</div>
    );
}
 
export default SignupPage;