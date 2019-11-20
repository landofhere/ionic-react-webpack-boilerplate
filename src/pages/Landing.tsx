import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

export const Landing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Landing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Content
      </IonContent>
    </IonPage>
  );
};