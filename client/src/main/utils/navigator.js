import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const navigator = (path) => {
  history.push(path);
};
