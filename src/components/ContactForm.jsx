import ContactFormCSS from './ContactForm.module.css';
import { useFormik } from "formik";
import { contactFormSchema } from "../schema/FormSchema";

const onSubmit = () => {
    console.log("submitted")
}

const ContactForm = () => {
    const { values, errors, touched, isValid, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            userName: '',
            userEmail: '',
            userPhone: '',
            userComment: ''
        },
        validationSchema: contactFormSchema,
        onSubmit
    })

    return (
        <form onSubmit={handleSubmit} className={ContactFormCSS.form}>
            <label htmlFor="userName">Your Name</label>
            <input
                type="text"
                name="userName"
                id="userName"
                placeholder='ex: John Doe'
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.userName && touched.userName && ContactFormCSS.invalidInput}
            />
            {errors.userName && touched.userName && <p className={ContactFormCSS.error_message}>{errors.userName}</p>}

            <label htmlFor="userEmail">Your Email</label>
            <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder='example@gamil.com'
                value={values.userEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.userEmail && touched.userEmail && ContactFormCSS.invalidInput}
            />
            {errors.userEmail && touched.userEmail && <p className={ContactFormCSS.error_message}>{errors.userEmail}</p>}

            <label htmlFor="userPhone">Your Phone Number <span className={ContactFormCSS.optional}>(optional)</span></label>
            <input
                type="number"
                name="userPhone"
                id="userPhone"
                placeholder='+1 (xxx) xxx-xxxx'
                value={values.userPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.userPhone && touched.userPhone && ContactFormCSS.invalidInput}
            />
            {errors.userPhone && touched.userPhone && <p className={ContactFormCSS.error_message}>{errors.userPhone}</p>}

            <label htmlFor="userComment">Your Comment</label>
            <textarea
                type="text"
                name="userComment"
                id="userComment"
                rows={10}
                cols={30}
                placeholder='Write down your comment here...'
                value={values.userComment}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.userComment && touched.userComment && ContactFormCSS.invalidInput}
            />
            {errors.userComment && touched.userComment && <p className={ContactFormCSS.error_message}>{errors.userComment}</p>}

            <button className={`${ContactFormCSS.btn} ${isValid ? ContactFormCSS.btnValid : ContactFormCSS.btnInValid}`} disabled={!isValid} type="submit">Send</button>
        </form>
    );
};

export default ContactForm;