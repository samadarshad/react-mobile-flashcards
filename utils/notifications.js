import * as Notifications from 'expo-notifications';

const localNotification = {
    title: "Mobile Flashcards",
    body: 'Don`t forget to take a quiz today!',
};

function getTomorrowNotificationTime() {
    let tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // tomorrow.setHours(20);
    // tomorrow.setMinutes(0);

    tomorrow.setDate(tomorrow.getDate());
    tomorrow.setSeconds(59);
    return tomorrow
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
            trigger: {
                date: getTomorrowNotificationTime(),
            },
        });
        console.log('Notification scheduled.')
        Notifications.addNotificationReceivedListener(notification => {
            console.log("Notification received", notification);
        });
    }
}