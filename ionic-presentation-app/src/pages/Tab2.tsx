<<<<<<< HEAD
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
=======
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonCard, IonCardTitle, IonCardContent } from '@ionic/react';
import {Storage} from "@ionic/storage";
>>>>>>> 1ec7752e5a91a64d7a0dbe000e62d161539888cc
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const storage = new Storage({
  name: "_cards"
});
await storage.create();

var text = "";

const onInput = (event: Event) => {
  text = (event.target as HTMLIonInputElement).value as string;
  (document.getElementById("card-content") as HTMLIonCardContentElement).innerText = text;
}

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar> 
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonInput id="text-input" clearInput={true} placeholder="Enter text" onIonInput={onInput}></IonInput>
        </IonItem>
        <IonCard class="ion-padding">
          <IonCardTitle>This is a card!</IonCardTitle>
          <IonCardContent id="card-content">Enter some text to change this card!</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
