'use client'
import React from 'react';
import { IonContent, IonPage, IonTitle } from '@ionic/react';

const NotFoundPage = () => {
    return (
        <IonPage>
            <IonContent fullscreen={true}>
                <IonTitle size="large" className='text-center'>Không tim thấy</IonTitle>
            </IonContent>
        </IonPage>
    );
}

export default NotFoundPage;