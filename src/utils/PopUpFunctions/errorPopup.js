import { toast } from 'react-toastify';


import { css } from "glamor";

const ErrorPopUp = (text) => {
    toast.error(text, {                
        /* theme: "colored",  */
        hideProgressBar: true,
        autoClose: 2000,
        className: 'toast-error-container toast-error-container-after',
        progressClassName: css({
            background: '#000000',
      }),
    })
};


export default ErrorPopUp