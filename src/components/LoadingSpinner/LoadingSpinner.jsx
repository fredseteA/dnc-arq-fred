import './LoadingSpinner.css'
import LoadingSpinnerGif from '../../assets/loading-spinner.gif'

const LoadingSpinner = () => {
    return(
        <div className="loading-overlay-container d-flex al-center jc-center">
            <img src={LoadingSpinnerGif} alt="error" height='60px' />
        </div>
    )
}

export default LoadingSpinner