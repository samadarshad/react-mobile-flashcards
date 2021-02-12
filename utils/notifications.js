import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_STORAGE_KEY = 'ReactMobileFlashcards:notifications';

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync);
};

export async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return (
        settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
}

export async function requestPermissionsAsync() {
    return await Notifications.requestPermissionsAsync({
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
        },
    });
}

function createNotification() {
    return {
        title: 'Study by Flashcards!',
        body: "👋 do not forget to take a quiz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    };
};

function handleNotification() {
    console.warn('ok! got your notif');
}

export function testScheduleNotification() {
    if (!allowsNotificationsAsync()) {
        console.log('Notification permissions needed.')
        requestPermissionsAsync()
    } else {
        console.log('Notification permissions granted.')
    }
    Notifications.scheduleNotificationAsync({
        content: {
            title: "Time's up!",
            body: 'Change sides!',
        },
        trigger: {
            seconds: 2,
            repeats: true
        },
    });

    Notifications.addNotificationReceivedListener(handleNotification);
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();
                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(20);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}