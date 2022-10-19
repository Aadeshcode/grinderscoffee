import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store/store";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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
    <SessionProvider session={session}>
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
