import { createBrowserHistory } from "history";

let history;

if (window.____APP___HISTORY____) {
  history = window.____APP___HISTORY____;
} else {
  history = createBrowserHistory();
  window.____APP___HISTORY____ = history;
}

export default history;
