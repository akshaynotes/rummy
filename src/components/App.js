import Landing from "./Landing";
import theme from "./Theme";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lobby from "./Lobby";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/game" component={Lobby} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
