import Image from 'next/image'
import '../../scss/components/commun.scss'

interface ButtonProps {
    text: string;
    onClick: () => void;
}


const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className="component-Button" type="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;