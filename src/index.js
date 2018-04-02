import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import App from "container/App"
import configureStore from "store/configure"
import history from "store/history"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"

const store = configureStore(history)
const theme = createMuiTheme({
  palette: {
    secondary: {
      light: "#fffe6c",
      main: "#f2cb38",
      dark: "#bb9b00",
      contrastText: "#000000"
    },
    primary: {
      light: "#648bd0",
      main: "#2f5e9f",
      dark: "#003570",
      contrastText: "#ffffff"
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
