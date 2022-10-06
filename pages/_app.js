import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store/store";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  const queryClient = React.useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <ChakraProvider>
            <AnimatePresence>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AnimatePresence>
          </ChakraProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
