import { Toaster } from 'react-hot-toast';

export default function Notificador() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{ className: 'notificador', duration: 2000 }}
    />
  );
}
