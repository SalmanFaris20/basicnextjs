import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Basic Next JS | {pageTitle}</title>
        <meta name="description" content="Website Next JS" />
      </Head>
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
