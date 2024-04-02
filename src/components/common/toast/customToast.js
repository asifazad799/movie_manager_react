import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

export const customtToast = (type, message, options) => {
  switch (type) {
    case "error":
      return toast.error(message, { ...defaultOptions, ...options });
    case "info":
      return toast.info(message, { ...defaultOptions, ...options });
    case "success":
      return toast.success(message, { ...defaultOptions, ...options });
    case "warning":
      return toast.warning(message, { ...defaultOptions, ...options });
    default:
      return toast(message, { ...defaultOptions, ...options });
  }
};
