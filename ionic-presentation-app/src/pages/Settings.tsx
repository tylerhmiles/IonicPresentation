import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonSelect, IonSelectOption, IonList } from '@ionic/react';
import { Storage } from "@ionic/storage";
import './Settings.css';

const storage = new Storage();
await storage.create();

function setTheme(theme: string) {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

function updateAppPreferences(setting: string, value: string) {
  if (setting === "theme") {
    setTheme(value);
  }
}

function updateSetting(setting: string, value: string) {
  storage.set(setting, value);
  updateAppPreferences(setting, value);
}

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonSelect label="Theme" defaultValue="light" onIonChange={e => updateSetting("theme", e.detail.value)}>
              <IonSelectOption value="light">Light</IonSelectOption>
              <IonSelectOption value="dark">Dark</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
