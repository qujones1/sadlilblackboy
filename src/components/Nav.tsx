import { graphql, Link, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React, { useState } from "react";
import classnames from "classnames";
import { useLocation } from "@reach/router";

const menuIcon = require("../assets/icons/menu.svg") as string;
const closeIcon = require("../assets/icons/close.svg") as string;

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
    href:
      "https://www.toneden.io/sadlilblackboy/post/lo-fi-playlist-submissions",
    name: "Submissions",
  },
  {
    href: "/contact/",
    name: "Contact",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X",
    imgSrc: require("../assets/icons/spotify.svg"),
  },
  {
    href: "https://soundcloud.com/nuq-the-most-dope",
    imgSrc: require("../assets/icons/soundcloud.svg"),
  },
  {
    href: "https://www.instagram.com/sadlilblackboy/",
    imgSrc: require("../assets/icons/instagram.svg"),
  },
  {
    href: "https://vm.tiktok.com/7xopMR/",
    imgSrc: require("../assets/icons/tiktok.svg"),
  },
  {
    href: "https://www.youtube.com/c/sadlilblackboy?sub_confirmation=1",
    imgSrc: require("../assets/icons/youtube.svg"),
  },
  {
    href: "https://twitter.com/sadlilblackboy",
    imgSrc: require("../assets/icons/twitter.svg"),
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
  const { pathname } = useLocation();
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible((v) => !v);
  };

  const nav = NAV_LINKS.map(({ href, name }) =>
    href[0] === "/" ? (
      <Link className="w-full" key={name} to={href}>
        <span
          className={classnames(
            "hover:opacity-50",
            pathname === href && "border-b-2 border-black"
          )}
        >
          {name}
        </span>
      </Link>
    ) : (
      <a className="w-full" key={name} href={href}>
        <span className="hover:opacity-50">{name}</span>
      </a>
    )
  );

  const social = (
    <div className="flex space-x-3 justify-center items-center">
      {SOCIAL_LINKS.map(({ href, imgSrc }) => (
        <a key={href} href={href}>
          <img src={imgSrc} width={40} height={40} />
        </a>
      ))}
    </div>
  );

  return (
    <>
      {mobileNavVisible && (
        <div className="flex flex-col inset-0 m-auto fixed w-full h-full bg-white z-10 p-4">
          <div className="flex mb-4">
            <nav className="flex flex-1 flex-col items-start space-y-1 py-2 text-2xl">
              {nav.map((e) =>
                React.cloneElement(e, { onClick: toggleMobileNav })
              )}
            </nav>
            <div className="ml-auto cursor-pointer" onClick={toggleMobileNav}>
              <img className="w-10 h-10" src={closeIcon} />
            </div>
          </div>
          {social}
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
          <span className="font-header text-xl sm:text-3xl">
            [sadlilblackboy]
          </span>
          <div className="hidden sm:block ml-auto">{social}</div>
          <div
            className="sm:hidden ml-auto cursor-pointer"
            onClick={toggleMobileNav}
          >
            <img width={40} height={40} src={menuIcon} />
          </div>
        </div>
        <nav className="hidden mt-1 space-x-3 sm:block">{nav}</nav>
      </section>
    </>
  );
}
