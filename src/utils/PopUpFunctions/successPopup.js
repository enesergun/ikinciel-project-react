import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { css } from "glamor";

const SuccessPopUp = (text) => {
    toast.success(text, {
        /* theme: "colored",  */
        hideProgressBar: true,
        autoClose: 1500,
        className: 'toast-success-container toast-success-container-after',
        progressClassName: css({
            background: '#000000',
      })
    });    
};


export default SuccessPopUp