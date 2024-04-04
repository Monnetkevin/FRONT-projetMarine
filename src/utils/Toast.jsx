import { toast } from "react-toastify";

const toastSuccess = (data) => {
  return toast.success(data, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggablePercent: 60,
    progress: undefined,
    theme: "light",
  });
};

const toastError = (data) => {
  return toast.error(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggablePercent: 60,
    progress: undefined,
    theme: "light",
  });
};

export default { toastSuccess, toastError };
