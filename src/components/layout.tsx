import "tailwindcss/tailwind.css";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Helmet from "react-helmet";

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    logo: file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

export const Layout = ({ children }) => {
  const data = useStaticQuery(query);

  return (
    <React.Fragment>
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
      <nav>
        <div>
          <a href="/">
            <Img fixed={data.logo.childImageSharp.fixed} />
            <h1>[sadlilblackboy]</h1>
          </a>
          <div>
            <a href="/">Home</a>
            <a href="/playlists">Playlists</a>
            <a href="https://teespring.com/stores/sadlilblackboy">Merch</a>
            <a href="/submit">Submissions</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
      {children}
    </React.Fragment>
  );
};
