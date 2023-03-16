import { Flex, Button } from "@chakra-ui/react";

type Props = {}
const NotificationForm = (props: Props) => {

    const onSendNotification = () => {
        //request permission for push using notification push api
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                //create notification
                const notification = new Notification('Hello World', {
                    body: 'This is a notification',
                    icon: '/logo512.png'

                });
            }
        });
    }

    return (
        <Flex>NotificationForm<Button onClick={onSendNotification}>Send Push</Button></Flex>
    )
}
export default NotificationForm