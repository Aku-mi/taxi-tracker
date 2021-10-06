import React from "react";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Pages } from "./pages";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Pages />
      </PersistGate>
    </Provider>
  );
};

export default App;
