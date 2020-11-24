import "./index.css";

import { useStaticQuery, graphql, Link } from "gatsby";

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
              "Who are you? Why are you here? Lofi hiphop, music, anime, and chill vibes. Lets all be sad together.",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Nav />
      <main className={`max-w-screen-md mx-auto p-2 ${className}`}>
        {header != null && <h1>[{header}]</h1>}
        {children}
      </main>
    </>
  );
}
