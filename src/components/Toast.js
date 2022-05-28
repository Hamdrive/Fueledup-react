import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast({type, message}) {
  return toast(message, {
    type: type,
    transition: Slide,
    position: "bottom-left",
    autoClose: 1250,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });;
}
