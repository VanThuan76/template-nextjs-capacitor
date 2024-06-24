import { Redirect, Route } from 'react-router-dom';
import { Suspense } from 'react';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { cog, flash, list } from 'ionicons/icons';

import FeedScreen from '@metaverse/@screen/feed';
import ListScreen from '@metaverse/@screen/list';
import SettingScreen from '@metaverse/@screen/setting';

import ListDetail from '@components/screens/list/ListDetail';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/feed" render={() => <FeedScreen />} exact={true} />
          <Route path="/lists" render={() => <ListScreen />} exact={true} />
          <Route
            path="/lists/:listId"
            render={() => <ListDetail />}
            exact={true}
          />
          <Route path="/settings" render={() => <SettingScreen />} exact={true} />
          <Route path="" render={() => <Redirect to="/feed" />} exact={true} />
        </Suspense>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/feed">
          <IonIcon icon={flash} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/lists">
          <IonIcon icon={list} />
          <IonLabel>Lists</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
