import React, {useState} from "react";
import ContactFormCSS from './ContactForm.module.css';

const ContactForm = () =>{
    const [userInput, setUserInput ] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        userComment: ''
    });
    const [sent, setSent] = useState(false);
    const [invalid, setInvalid] = useState(false);

    function handelForm(e) {
        const {name, value} = e.target;
        setUserInput(oldValue => {
            return (
                {
                    ...oldValue,
                    [name]: value
                }
            )
        })
    };

    function handelSubmit(e) {
        e.preventDefault();
        // send data to server
        if (userInput.userComment && userInput.userEmail && userInput.userName) {
            setSent(true);
            // empty input
            setInvalid(false);
            setUserInput({
                userName: '',
                userEmail: '',
                userPhone: '',
                userComment: ''
            });
        } else {
            setInvalid(true);
            return
        }
    };

    return (
        <>
            {
                sent?
                <p className={ContactFormCSS.sent}>Thank you! We resived your message</p>
                :
                <form onSubmit={handelSubmit} className={ContactFormCSS.form}>
                    <label htmlFor="userName">Your Name</label>
                    <input type="text" name="userName" id="userName" placeholder='ex: John Doe' value={userInput.userName} onChange={handelForm} minLength={3} maxLength={50}/>

                    <label htmlFor="userEmail">Your Email</label>
                    <input type="email" name="userEmail" id="userEmail" placeholder='example@gamil.com' value={userInput.userEmail} onChange={handelForm} minLength={3} maxLength={50}/>

                    <label htmlFor="userPhone">Your Phone Number</label>
                    <input type="number" name="userPhone" id="userPhone" placeholder='+1 (xxx) xxx-xxxx' value={userInput.userPhone} onChange={handelForm}/>

                    <label htmlFor="userComment">Your Comment</label>
                    <textarea type="text" name="userComment" id="userComment" placeholder='Write down your comment here...' value={userInput.userComment} onChange={handelForm} rows={10} cols={30}/>
                    {invalid? <p style={{color: 'red'}}>* Fill all required fields</p>: null}
                    <button className={ContactFormCSS.btn}>Send</button>
                </form>
            }
        </>
    );
};

export default ContactForm;