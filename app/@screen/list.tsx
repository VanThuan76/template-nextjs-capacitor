import AllList from '@components/screens/list/AllList';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
} from '@ionic/react';

const ListScreen = () => {
    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonTitle>Lists</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Lists</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <AllList />
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ListScreen;