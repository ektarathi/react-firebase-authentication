import * as React from "react";
import { useForm } from "react-hook-form";
import firebase from "../../firebaseConfig.js";
import { useDispatch } from "react-redux";
import { SuccessActions } from "../../redux/actions/successAction";
import TextArea from "./TextArea";
import FormButton from "./FormButton";
export interface FormProps {
}

const Form: React.SFC<FormProps> = () => {
    const successDispatch = useDispatch<React.Dispatch<SuccessActions>>();
	const { register, handleSubmit, errors } = useForm({
		shouldFocusError: true,
	});
    
	const onSubmit = (formData: any, e: any) => {
		e.preventDefault();
        successDispatch({ type: "SET_SUCCESS", name: formData.fullName, phoneNumber: formData.phoneNumber });    
        var firestore = firebase.firestore();
        const db = firestore.collection("contactFormData");
        let userName = formData.fullName;
        let userEmail = formData.email;
        let userNumber = formData.phoneNumber;
        
        //Access Database
        db.doc().set({
            name: userName,
            email: userEmail,
            number: userNumber
        }).then(function(){
            console.log("Data Saved");
            formData.fullName = "";
        }).catch(function(error: any){
            console.log(error);
        });
    };

	const addPhoneNumber = () => {
		console.log("Add Phone Number");
	};

	return (
		<form className="page-contact__form" onSubmit={handleSubmit(onSubmit)}>
			<div className="page-contact__form page-contact__form--block">
				<div className="page-contact__form--block-leftContent">
					<label htmlFor="name" className="formLabel">
						Full Name
					</label>
					<input
						type="text"
						name="fullName"
						id="name"
						className="formField"
						ref={register({
							required: {
								value: true,
								message: "Full Name is required",
							},
							minLength: {
								value: 10,
								message: "Full Name should be minimum length of 10",
							},
						})}
					/>
					<span className="error">{errors.fullName && errors.fullName.message}</span>
				</div>
				<div className="page-contact__form--block-rightContent">
					<label htmlFor="email" className="formLabel">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="formField"
						ref={register({
							required: true,
							pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
					/>

					<span className="error">{errors.email && <span>Email address is invalid</span>}</span>
				</div>
			</div>
			<div className="page-contact__form page-contact__form--block">
				<label htmlFor="phone-number" className="formLabel">
					Phone Number
				</label>
				<input
					type="text"
					name="phoneNumber"
					id="phone-number"
					className="formField"
					ref={register({
						required: {
							value: true,
							message: "Phone number is required",
						},
						maxLength: {
							value: 20,
							message: "Phone number is invalid. Cannot exceed 20 characters",
						},
					})}
				/>
				<span className="error">{errors.phoneNumber && errors.phoneNumber.message}</span>
			</div>
			<FormButton
				className="button button__addNumberButton"
				text="Add new phone number"
				onClick={addPhoneNumber}
			/>
			<TextArea />
			<textarea
				aria-label="sample text"
                rows={7}
                name="message"
				maxLength={500}
				ref={register({
					required: {
						value: true,
						message: "Message is required",
					},
					maxLength: {
						value: 500,
						message: "The message provided exceeds the maximum length allowed",
					},
				})}
			/>
            <span className="error">{errors.message && errors.message.message}</span>
			<label className="checkbox">
				<input
					ref={register({ required: "Please select the address input" })}
					name="addressDetails"
					value="true"
					type="checkbox"
				/>
                <span className="checkmark"></span>
				Add address details
			</label>
			{errors.addressDetails && (
				<p className="error">{errors.addressDetails.message}</p>
			)}
			<button className="button button__loginButton"> Submit </button>
		</form>
	);
};

export default Form;
