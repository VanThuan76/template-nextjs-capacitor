'use client'
import { useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonMenuButton,
} from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';

import { useAppSelector } from '@shared/hooks/useRedux';

import FeedCard from '@components/screens/feed/FeedCard';
import Notifications from '@components/commons/Notifications';

const FeedScreen = () => {
    const { homeItems } = useAppSelector(state => state)
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Feed</IonTitle>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton onClick={() => setShowNotifications(true)}>
                            <IonIcon icon={notificationsOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Feed</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Notifications
                    open={showNotifications}
                    onDidDismiss={() => setShowNotifications(false)}
                />
                {homeItems.map((i, index) => (
                    <FeedCard {...i} key={index} />
                ))}
            </IonContent>
        </IonPage>
    );
};

export default FeedScreen;
