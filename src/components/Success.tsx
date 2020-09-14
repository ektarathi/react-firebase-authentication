import * as React from 'react';
export interface SuccessProps {
    name: any;
    number: any;
}
 
const Success: React.SFC<SuccessProps> = ({ name, number }: SuccessProps) => {
    return ( 
        <React.Fragment>
            <div className="page-contact__success">
                <img src={`${require('../assets/images/tick.jpg')}`} className="tick" alt="Tick"/>
                <h3>Your message has been sent</h3>
                <p> Thank you {name}. We have received your details.</p>
                <p>We will be in touch with you on {number} within 24 hours.</p>
            </div>
        </React.Fragment>
     );
}
 
export default Success;