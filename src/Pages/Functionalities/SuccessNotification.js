import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export default function Notification() {
    const successNotification = () => {
        store.addNotification({
            title: "Boa!",
            message: "O post já está salvo :)",
            type: "success",
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

    return successNotification;
};