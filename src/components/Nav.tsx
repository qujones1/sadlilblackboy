import { graphql, Link, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React, { useState } from "react";

const menuIcon = require("../assets/images/menu.svg") as string;
const closeIcon = require("../assets/images/close.svg") as string;

const NAV_LINKS = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/playlists/",
    name: "Playlists",
  },
  {
    href: "https://teespring.com/stores/sadlilblackboy/",
    name: "Merch",
  },
  {
    href: "/submit/",
    name: "Submissions",
  },
  {
    href: "/contact/",
    name: "Contact",
  },
];

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

export function Nav() {
  const data = useStaticQuery(query);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleNav = () => {
    setMobileNavVisible((v) => !v);
  };

  return (
    <>
      {mobileNavVisible && (
        <div className="flex inset-0 m-auto fixed w-full h-full bg-white z-10 p-4">
          <nav className="flex flex-col items-start space-y-1 text-xl">
            {NAV_LINKS.map(({ href, name }) =>
              href[0] === "/" ? (
                <Link
                  activeClassName="border-b-2 border-black"
                  onClick={toggleNav}
                  key={name}
                  to={href}
                >
                  {name}
                </Link>
              ) : (
                <a key={name} href={href}>
                  {name}
                </a>
              )
            )}
          </nav>
          <div className="sm:hidden ml-auto" onClick={toggleNav}>
            <img width={40} height={40} src={closeIcon} />
          </div>
        </div>
      )}
      <section className="max-w-screen-md mx-auto border-b-4 border-red-500 px-4 py-2 relative">
        <div className="flex items-center">
          <Link to="/">
            <Image
              className="rounded-full overflow-hidden shadow-lg mr-2"
              fixed={data.logo.childImageSharp.fixed}
            />
          </Link>
          <span className="font-serif text-xl sm:text-3xl">
            [sadlilblackboy]
          </span>
          <div className="sm:hidden ml-auto" onClick={toggleNav}>
            <img width={40} height={40} src={menuIcon} />
          </div>
        </div>
        <nav className="hidden mt-1 space-x-3 sm:block">
          {NAV_LINKS.map(({ href, name }) =>
            href[0] === "/" ? (
              <Link
                activeClassName="border-b-2 border-black"
                className="hover:opacity-50"
                key={name}
                to={href}
              >
                {name}
              </Link>
            ) : (
              <a className="hover:opacity-50" key={name} href={href}>
                {name}
              </a>
            )
          )}
        </nav>
      </section>
    </>
  );
}
