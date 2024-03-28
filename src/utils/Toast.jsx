import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export const TOAST = {
  container: (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      limit={3}
    />
  ),
  success: toast.success({
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggablePercent: 60,
    progress: undefined,
    theme: "light",
  }),
};
