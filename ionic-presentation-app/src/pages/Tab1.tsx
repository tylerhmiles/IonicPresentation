import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <h1>Example App</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat officiis ex natus nulla deserunt cum repudiandae nostrum. Odit harum eos perferendis sit vero minus molestiae minima non perspiciatis officiis.</p>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
