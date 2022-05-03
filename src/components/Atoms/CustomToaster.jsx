import { Toaster } from 'react-hot-toast';

export default function CustomToaster() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{ className: 'toast', duration: 2000 }}
    />
  );
}
