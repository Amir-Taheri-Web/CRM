import Layout from "@/layout/Layout";
import "@/styles/globals.css";

import { DM_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={dm_sans.className}>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </div>
  );
}
