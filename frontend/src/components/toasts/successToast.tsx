import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successToast = (message: string) => {

    return (

        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            className: 'toast-message'
        })

    )

}

export default successToast;