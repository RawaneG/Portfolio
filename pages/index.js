import Head from "next/head";
import { Home } from "@/components/home/Home";
// import { useTranslation } from "react-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function home() {
  // const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Rawane Sow | Web Developer</title>
        <meta name="description" content="Bleep boop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
// }
