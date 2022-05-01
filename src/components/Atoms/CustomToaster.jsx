import { Toaster } from 'react-hot-toast';

export default function CustomToaster() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{ className: 'toast', duration: 2000 }}
    />
  );
}
