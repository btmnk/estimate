import React from "react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { Theme } from "@klarheit/theme-default";

import { Store } from "../store/store";
import { Router } from "../Router";
import { useSocketConnection } from "../hooks/socket/useSocketConnection";
import { Layout } from "./layout/Layout";

import "../i18n/i18n";
import "./Theme.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
  useSocketConnection();

  return (
    <QueryClientProvider client={queryClient}>
      <Theme />

      <Provider store={Store}>
        <Layout>
          <Router />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
};

export { App };
