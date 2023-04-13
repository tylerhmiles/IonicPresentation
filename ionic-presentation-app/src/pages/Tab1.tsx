import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonAlert,IonInput, IonItem, IonList,IonLabel } from '@ionic/react';
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
     
        <IonContent class="content">
          <h1>Demo Application</h1>
        </IonContent>
      
       
   <IonList>
   <h1>Ion components implemented <br/></h1>
      <IonItem>
        <IonLabel>Ion cards</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Ion input</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Ion Buttons</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Ion Button</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Ion Content</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Ion Alert </IonLabel>
      </IonItem>
    </IonList>
    <IonButton  id="present-alert">Alert Demo</IonButton>
    <IonButton onclick="window.open('https://ionicframework.com/docs', '_system', 'location=yes'); return false;">Official documentation</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Demo"
        subHeader="Test message"
        message="This is a demo of the alert function "
        buttons={['OK']}
      ></IonAlert>
     
      </IonContent>
      
  
    </IonPage>  
  );
};

export default Tab1;
