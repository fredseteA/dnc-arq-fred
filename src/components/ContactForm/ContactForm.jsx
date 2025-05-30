import './ContactForm.css'
import { useState, useEffect, useContext } from 'react'

//COMPONENTS
import Button from '../Button/Button'

//CONTEXT
import { AppContext } from '../../context/appContext'

const ContactForm = () => {
    
    const appContext = useContext(AppContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isValidForm, setIsValidForm] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(isValidForm){
            setFormSubmitLoading(true)
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({...formData, access_key: "04d1e25c-fcf7-4bd6-ac45-95b3cc7fd6db"})
                })

                if(response.ok){
                    setFormSubmitted(true)
                }else{
                    alert('Error!')
                }
            } catch(error){
                alert('Error: ', error.message)
            } finally {
                setFormSubmitLoading(false)
            }

        }
    }

    useEffect( () => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }

        const isValid = formData.name.trim() !== '' && 
                        formData.email.trim() !== '' && 
                        isValidEmail(formData.email) && 
                        formData.message.trim() !== ''

        
        setIsValidForm(isValid)

    }, [formData])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <div className='contact-form d-flex fd-column al-center'>
            <h2>{appContext.languages[appContext.language].contact.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex form-group">
                    <input 
                        className="form-input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder={appContext.languages[appContext.language].contact.pl1}
                        onChange = {handleChange} 
                    />
                    <input 
                        className="form-input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder={appContext.languages[appContext.language].contact.pl2}
                        onChange = {handleChange} 
                    />
                </div >
                    
                <div className="d-flex form-group">
                    <textarea
                        className="form-input"
                        name="message"
                        id="message"
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        onChange = {handleChange} 
                        rows="4"
                    ></textarea>
                </div>

                <div className="al-center d-flex jc-end form-group">
                    {formSubmitted && <p className='text-primary'>{appContext.languages[appContext.language].contact.successMsg}</p>}
                    <Button type="submit" buttonStyle="secondary" disabled={!isValidForm || formSubmitLoading}>
                        {appContext.languages[appContext.language].general.send}
                    </Button>
                </div>
            </form>
        </div>
    )
}
//deixar disponivel para outros componentes
export default ContactForm