//ASSETS
import './Button.css'
import whiteArrow from '../../assets/white-arrow.svg'

const Button = ({buttonStyle, children, arrow, loading, ...props}) =>{
    return(
            
        <button className={`button ${buttonStyle}`}{...props}>
            {children} {arrow && <img src={whiteArrow} />}
        </button>
    )
}

export default Button