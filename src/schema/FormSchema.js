import * as yup from "yup";

const requiredText = "This field is required";
const regexNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

export const cartFormSchema = yup.object({
    deliveryMethod: yup.string().required(requiredText),
    clientName: yup.string().min(3, "min 3 letters").max(50, "max 50 letters").required(requiredText),
    phoneNumber: yup.string().matches(regexNumber, "use 10 digits").required(requiredText),
    personNum: yup.string().max(2, "max 2 digits"),
    address: yup.string().max(100, "max 100 letters"),
    restaurant: yup.string().required(requiredText),
    AddInfo: yup.string().max(100, "max 100 letters"),
    paymentMethod: yup.string().required(requiredText)
})

export const contactFormSchema = yup.object({
    userName: yup.string().min(3, "min 3 letters").required(requiredText),
    userEmail: yup.string().email("Write a vaild email").required(requiredText),
    userPhone: yup.string().matches(regexNumber, "use 10 digits"),
    userComment: yup.string().max(500, "max 500 letters").required(requiredText)
})