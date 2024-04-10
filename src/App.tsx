import AppContainer from "@pages/AppContainer";

import "./App.module.scss";
import "./i18n";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <AppContainer />
    </Suspense>
  );
}

export default App;
