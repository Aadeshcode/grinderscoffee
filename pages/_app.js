import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store/store";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
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
    <SessionProvider session={pageProps.session}>
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
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
