import { Widget } from "@glitter-finance/widget";
import type { WidgetConfig } from "@glitter-finance/widget";
import styles from "./App.module.css";

const myConfig: WidgetConfig = {
  features: {
    integrationSection: true,
  },
  themeOverrides: {
    palette: {
      primary: {
        main: "#D8D9DA",
        dark: "#61677A",
        light: "#FFF6E0",
      },
      text: {
        primary: "#D8D9DA",
        pink: "#61677A",
      },
      background: {
        gradientBox: "#272829",
        darkContainer: "#242424",
      },
      sitePalette: {
        linkHover: "#D8D9DA",
      },
      common: {
        white: "#FFF6E0",
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiDialog: {
        styleOverrides: {
          root: {
            borderRadius: "4px",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: "4rem",
            background: "#000",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            borderRadius: "4px!important",
            background: "#000",
            backgroundColor: "#FF0000",
            padding: {
              xs: "16px",
              sm: "24px",
            },
          },
        },
      },
    },
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
