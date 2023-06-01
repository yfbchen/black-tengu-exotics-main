import { FunctionComponent, ReactNode } from "react";
import Head from "next/head";

import { Styled } from "@components/Layout/styled";
import Navigation from "@components/Navigation";

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Black Tengu Exotics</title>
        <meta
          name="description"
          content="A place to explore and buy exotic creatures."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styled.MainContainer>
        <Navigation />
        <Styled.BodyContainer>{children}</Styled.BodyContainer>
      </Styled.MainContainer>
    </>
  );
};

Layout.displayName = "Layout";

export default Layout;
