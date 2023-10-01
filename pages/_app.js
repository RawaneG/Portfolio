import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

function App({ Component, pageProps }) {
  return (
    <div id="root" className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
