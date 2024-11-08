import * as yup from 'yup'


export const MessageSend = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("This field is Required"),
    name:yup.string().required("This field is Required"),
    message:yup.string().required("This field is Required"),
})