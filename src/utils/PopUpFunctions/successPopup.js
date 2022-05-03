import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SuccessPopUp = (text) => {
    toast.success(text, {
        theme: "colored", 
        hideProgressBar: true,
        autoClose: 1500,});    
};


export default SuccessPopUp