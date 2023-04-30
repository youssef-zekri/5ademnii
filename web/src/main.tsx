import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider, createClient, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
  ClientQuery,
  LoginMutation,
  LogoutMutation,
  RegisterCompanyMutation,
  RegisterClientMutation,
  CompanyDocument,
  CompanyQuery,
} from "./gql/graphql.tsx";
import betterUpdateQuery from "./utils/BetterUpdateQuery.ts";
import store from "./data/Store/Store.ts";
import { Provider as ReduxProvider } from "react-redux";
const url = "http://10.80.4.113:5000/api";

const client = createClient({
  url,
  exchanges: [
    cacheExchange({
      updates: {
        Mutation: {
          logout: (_result, args, cache, info) => {
            betterUpdateQuery<LogoutMutation, CompanyQuery | ClientQuery>(
              cache,
              { query: CompanyDocument },
              _result,
              () => {
                return {
                  Company: null,
                };
              }
            );
          },
          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, CompanyQuery | ClientQuery>(
              cache,
              { query: CompanyDocument },
              _result,
              (result, query) => {
                if (result.login.company) {
                  return {
                    Company: result.login.company,
                    Client: query,
                  };
                } else if (result.login.client) {
                  return {
                    Company: query,
                    Client: result.login.client,
                  };
                } else {
                  return {
                    query,
                  };
                }
              }
            );
          },
          registerClient: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterClientMutation, ClientQuery>(
              cache,
              { query: CompanyDocument },
              _result,
              (result, query) => {
                if (result.RegisterClient) {
                  return {
                    Client: result.RegisterClient,
                  };
                } else {
                  return {
                    query,
                  };
                }
              }
            );
          },
          registerCompany: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterCompanyMutation, CompanyQuery>(
              cache,
              { query: CompanyDocument },
              _result,
              (result, query) => {
                if (result.RegisterCompany) {
                  return {
                    Company: result.RegisterCompany,
                  };
                } else {
                  return {
                    query,
                  };
                }
              }
            );
          },
        },
      },
    }) as any,
    fetchExchange,
  ],
  fetchOptions: {
    credentials: "include",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider value={client}>
  <ReduxProvider store={store}>
      <App />
  </ReduxProvider>
  </Provider>
);
