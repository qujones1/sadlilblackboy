import "./index.css";

import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Helmet from "react-helmet";

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
      <nav className="max-w-screen-md mx-auto border-b-4 border-red-500 px-4 py-2">
        <Link className="flex items-center" to="/">
          <Img
            className="rounded-full overflow-hidden shadow-lg mr-2"
            fixed={data.logo.childImageSharp.fixed}
          />
          <span className="font-serif text-3xl">[sadlilblackboy]</span>
        </Link>
        <div className="mt-1">
          {NAV_LINKS.map(({ href, name }) => (
            <Link className="hover:underline mr-3" key={name} to={href}>
              {name}
            </Link>
          ))}
        </div>
      </nav>
      <main className={`max-w-screen-md mx-auto p-2 ${className}`}>
        {header != null && <h1 className="heading mb-2">[{header}]</h1>}
        {children}
      </main>
    </>
  );
}
