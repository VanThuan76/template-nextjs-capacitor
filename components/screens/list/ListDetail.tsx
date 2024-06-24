import {
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@shared/hooks/useRedux';
import { ListItem, TodoListItem } from '../../../mock';
import { setDone } from '@store/appSlice';

type ListDetailParams = {
  listId: string;
};

const ListItems = ({ list }: { list: TodoListItem }) => {
  return (
    <IonList>
      {(list?.items || []).map((item, key) => (
        <ListItemEntry list={list} item={item} key={key} />
      ))}
    </IonList>
  );
};

const ListItemEntry = ({
  list,
  item,
}: {
  list: TodoListItem;
  item: ListItem;
}) => (
  <IonItem onClick={() => setDone({ list, listItem: item, done: !item.done })}>
    <IonLabel>{item.name}</IonLabel>
    <IonCheckbox
      aria-label={item.name}
      checked={item.done || false}
      slot="end"
    />
  </IonItem>
);

const ListDetail = () => {
  const { lists } = useAppSelector(state => state)
  const params = useParams<ListDetailParams>();
  const { listId } = params;
  const loadedList = lists.find(l => l.id === listId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/lists" />
          </IonButtons>
          <IonTitle>{loadedList?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{loadedList && <ListItems list={loadedList} />}</IonContent>
    </IonPage>
  );
};

export default ListDetail;
