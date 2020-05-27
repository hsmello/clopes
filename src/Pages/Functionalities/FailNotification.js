import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export default function Notification() {
    const failNotification = () => {
        store.addNotification({
            title: "O post não foi salvo",
            message: "Algum campo obrigatório não foi preenchido",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 6000,
                onScreen: true
            }
        });
    }

    return failNotification;
};