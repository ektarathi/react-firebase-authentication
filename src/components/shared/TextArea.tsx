import * as React from 'react';
export interface TextAreaProps {}
 
const TextArea: React.SFC<TextAreaProps> = () => {
    return ( 
        <div className="page-contact__form--textarea">
            <div className="page-contact__form page-contact__form--block">
                <div className="page-contact__form--block-leftContent">
                    <p>Message</p>
                </div>
                <div className="page-contact__form--block-rightContent">
                    <p className="page-contact__form--textarea-text">Maximum text length is 500 characters</p>
                </div>
            </div>
        </div>
    );
}
 
export default TextArea;