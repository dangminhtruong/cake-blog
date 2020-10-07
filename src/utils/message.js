
import { Notification } from 'element-ui';

export const message = (message, type) => {
    Notification({
        title: type,
        message: message,
        type: type,
        position: 'bottom-right'
    });
}