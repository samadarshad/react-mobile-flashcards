import * as Notifications from 'expo-notifications';

const localNotification = {
    title: "Mobile Flashcards",
    body: 'Don`t forget to take a quiz today!',
};

function getNotificationTime() {
    //below is the real notification timing
    // let tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // tomorrow.setHours(20);
    // tomorrow.setMinutes(0);
    // return { date: tomorrow }


    //below is for development purposes only    
    return { seconds: 10 }
}

async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return (
        settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
}

async function requestPermissionsAsync() {
    return await Notifications.requestPermissionsAsync({
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
        },
    });
}
export async function clearAllNotifications() {
    Notifications.cancelAllScheduledNotificationsAsync()
}

export async function moveNotificationToTomorrow() {
    clearAllNotifications()

    if (!allowsNotificationsAsync()) {
        console.log('Notification permissions needed.')
        await requestPermissionsAsync()
    }

    if (!allowsNotificationsAsync()) { // is there a better way to handle requesting notification permissions then re-running this function?
        console.log('Notification permissions denied.')
    } else {
        console.log('Notification permissions granted.')

        Notifications.scheduleNotificationAsync({
            content: localNotification,
            trigger: getNotificationTime(),
        });
        console.log('Notification scheduled.')
        Notifications.addNotificationReceivedListener(notification => {
            console.log("Notification received", notification);
        });
    }
}