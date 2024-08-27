import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

import { store } from "../store/store.ts";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
}
