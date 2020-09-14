import * as React from 'react';
export interface FormButtonProps {
    className: string; text:string;
    onClick: () => void;
}
 
const FormButton: React.SFC<FormButtonProps> = ({ className, text, onClick }: FormButtonProps) => {
    return (  
        <button
            type="submit"
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
 
export default FormButton;