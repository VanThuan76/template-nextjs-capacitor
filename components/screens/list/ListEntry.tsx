import { IonItem, IonLabel } from "@ionic/react";
import { TodoListItem } from "../../../mock";

const ListEntry = ({ list }: { list: TodoListItem }) => {
    return (
        <IonItem routerLink={`/lists/${list.id}`} className="list-entry">
            <IonLabel>{list.name}</IonLabel>
        </IonItem>
    );
};
export default ListEntry