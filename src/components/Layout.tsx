import "./tailwind.css";
import "./index.css";

import { useStaticQuery, graphql } from "gatsby";

import React from "react";
import Helmet from "react-helmet";
import { Nav } from "./Nav";

type Props = {
  header?: string;
  children: React.ReactNode;
  className?: string;
};

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export function Layout({ children, className, header }: Props) {
  const data = useStaticQuery(query);
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content:
              "Who are you? Why are you here? Lofi hiphop, music, anime, and chill vibes. Lets all be sad together."
          }
        ]}
      >
        <html lang="en" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <Nav />

      <main className={`max-w-screen-md mx-auto p-2 ${className}`}>
        {header != null && <h1>[{header}]</h1>}
        {children}
      </main>
    </>
  );
}
