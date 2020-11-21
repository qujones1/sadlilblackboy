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
    logo: file(relativePath: { eq: "images/logo.jpg" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

const NAV_LINKS = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/playlists",
    name: "Playlists",
  },
  {
    href: "https://teespring.com/stores/sadlilblackboy",
    name: "Merch",
  },
  {
    href: "/submit",
    name: "Submissions",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

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
      <nav className="border-b-4 border-red-500 p-2">
        <a className="flex items-center" href="/">
          <Img
            className="rounded-full overflow-hidden shadow-lg mr-2"
            fixed={data.logo.childImageSharp.fixed}
          />
          <h1 className="font-serif text-2xl">[sadlilblackboy]</h1>
        </a>
        <div className="mt-1">
          {NAV_LINKS.map(({ href, name }) => (
            <a className="hover:underline mr-1" key={name} href={href}>
              {name}
            </a>
          ))}
        </div>
      </nav>
      {children}
    </React.Fragment>
  );
};
