import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ErrorPopUp = (text) => {
    toast.error(text, {
        theme: "colored", 
        hideProgressBar: true,
        autoClose: 2000,});    
};


export default ErrorPopUp