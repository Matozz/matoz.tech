import "prismjs/themes/prism.css";
import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";
import "../styles/globals.css";
import "../styles/_output.css";
import "../styles/notion.css";
import "../styles/progress.css";
import BLOG from "../blog.config";
import dynamic from "next/dynamic";
import { LocaleProvider } from "../lib/locale";
import { ThemeProvider } from "../lib/theme";
import { LayoutProvider } from "../lib/layout";
import Scripts from "../components/Scripts";
import { Router } from "next/router";
import NProgress from "nprogress";

const Ackee = dynamic(() => import("../components/Ackee"), { ssr: false });
const Gtag = dynamic(() => import("../components/Gtag"), { ssr: false });

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Scripts />
      <LocaleProvider>
        <ThemeProvider>
          <LayoutProvider>
            <>
              {BLOG.isProd && BLOG?.analytics?.provider === "ackee" && (
                <Ackee
                  ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}
                  ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}
                />
              )}
              {BLOG.isProd && BLOG?.analytics?.provider === "ga" && <Gtag />}
              <Component {...pageProps} />
            </>
          </LayoutProvider>
        </ThemeProvider>
      </LocaleProvider>
    </>
  );
}

export default MyApp;
