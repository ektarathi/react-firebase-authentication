import * as React from "react";
import { Link } from "@reach/router";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";
import firebase from "../../firebaseConfig.js";
export interface LoginPageProps {
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

const LoginPage: React.SFC<LoginPageProps> = () => {
    const { register, handleSubmit, errors } = useForm({
		shouldFocusError: true,
    });
    const [error, setError] = React.useState('');

	const onSubmit = (formData: any, e: any) => {
        e.preventDefault();
        let email = formData.email;
        let password = formData.userPassword;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            navigate(`home`);
        }).catch((error: any) => {
            setError(error.message);
            console.log(error, typeof(error));
        });
    }

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // The signed-in user info.
            var user = result.user;
            navigate(`home`);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            setError(error.message);
          });
    }

	return (
		<div className="page-login">
			<div className="page-login__leftSection">
				<div className="page-login__content">
					<div className="page-login__content page-login__content--heading">
						<h1> Sign In </h1>
					</div>
					<p className="page-login__content page-login__content--text">
						Please login by entering details in the form. Once we get the
						information, our support team will contact you shortly regarding
						payment options.
					</p>
                    <br/>
                    <div className="error">{error}</div>
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
                                    maxLength: 20,
                                })}
                            />
                            <span className="error">{errors.userPassword && "Password length is not correct"}</span>
                            <button className="button button__loginButton">
                                Log In
                            </button>
                        </div>
					</form>
					<p className="text-center">or</p>
					<button className="button button__whiteButton" onClick={googleSignIn}>
						Sign in with Google
					</button>
                    <div className="text-center">
                        Don't have an account?{" "}
                        <NavLink to={"/signup"}>
                            Sign up here
                        </NavLink>
                    </div>
                    <div className="text-center">
                        <NavLink to={"/password-reset"}>
                            Forgot Password?
                        </NavLink>
                    </div>
				</div>
			</div>
			<div className="page-login__rightSection">
				<div className="page-login__image"></div>
			</div>
		</div>
	);
};

export default LoginPage;
