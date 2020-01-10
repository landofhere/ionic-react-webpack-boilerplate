import React from 'react';
import { IonMenu, IonMenuToggle, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

export const Menu: React.FC = () => (
  <>
    <IonMenu side="end" type="overlay" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
          <IonMenuToggle>
          <IonItem button routerLink={"/"} routerDirection="none">
            <IonLabel>Toggle</IonLabel>
          </IonItem>
        </IonMenuToggle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  </>
);