import { Widget } from "@glitter-finance/widget";
import type { WidgetConfig } from "@glitter-finance/widget";
import styles from "./App.module.css";

const myConfig: WidgetConfig = {
  features: {
    disableIntegration: true,
  },
};

function App() {
  return (
    <div className={styles.example}>
      <Widget config={myConfig} />
    </div>
  );
}

export default App;
