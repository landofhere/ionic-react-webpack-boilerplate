import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList, IonItem, IonLabel
} from '@ionic/react';
import React from 'react';
import axios from 'axios';

export const Landing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Landing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <App />
      </IonContent>
    </IonPage>
  );
};
interface DataReducer {
  state: any,
  action: any
}

type dataReducerAction =
  | {type: 'SET_ERROR'}
  | {type: 'SET_LIST'; list: []}

export const dataReducer = (state: any, action: dataReducerAction) => {
  if (action.type === 'SET_ERROR') {
    return { ...state, list: [], error: true };
  }
  if (action.type === 'SET_LIST') {
    return { ...state, list: action.list, error: null };
  }
  throw new Error();
};

const initialData = {
  list: [],
  error: null,
};

interface Data {
  list: object,
  error: any
}

interface NewsData {
  objectID: number,
  title: string
}

interface Counter {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<Counter>>;
}

const App = () => {
  const [counter, setCounter] = React.useState<number>(0);
  const [data, dispatch] = React.useReducer(dataReducer, initialData);
  React.useEffect(() => {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=ionic-react')
      .then(response => {
        dispatch({ type: 'SET_LIST', list: response.data.hits });
      })
      .catch(() => {
        dispatch({ type: 'SET_ERROR' });
      });
  }, []);

  let item:Data;
  return (
    <div>
      <h1>My Counter</h1>
      <Counter counter={counter} />
      <IonButton onClick={() => setCounter(counter + 1)}>
        Increment
      </IonButton>
      <IonButton onClick={() => setCounter(counter - 1)}>
        Decrement
      </IonButton>
      <h2>My Async Data</h2>
      {data.error && <div className="error">Error</div>}
      <IonList>
        {data.list.map((item:NewsData) => (
          item.title !== null &&
          <IonItem key={item.objectID}>
            <IonLabel>{item.title}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};
export const Counter: React.FC<{ counter: number }> = ({ counter }) => (
  <div>
    <p>{counter}</p>
  </div>
);
