import "../assets/layout.css";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React, { useEffect, useState } from "react";
import Tippy from "@tippy.js/react";
import styled from "react-emotion";
import Helmet from "react-helmet";

const appleSvg = require("../assets/apple.svg") as string;
const instagramSvg = require("../assets/instagram.svg") as string;
const soundcloudSvg = require("../assets/soundcloud.svg") as string;
const spotifySvg = require("../assets/spotify.svg") as string;
const teespringSvg = require("../assets/teespring.svg") as string;
const twitterSvg = require("../assets/twitter.svg") as string;
const youtubeSvg = require("../assets/youtube.svg") as string;

const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  border-bottom: 6px solid #d02120;
`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  padding: 10px;
`;

const LogoContainer = styled.a`
  display: flex;
  color: black;
  align-items: center;
  text-decoration: none;

  > div {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  > h1 {
    margin-bottom: 0;
    margin-left: 10px;
    margin-right: 20px;
    font-family: "edosz";
    font-weight: normal;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 460px) {
    margin-top: 10px;
  }

  a + a {
    margin-left: 10px;
  }

  img {
    width: 35px;
  }
`;

const socialLinks = [
  {
    logo: appleSvg,
    href: "https://itunes.apple.com/us/artist/nuq/1403168719"
  },
  {
    logo: instagramSvg,
    href: "https://www.instagram.com/sadlilblackboy/"
  },
  {
    logo: soundcloudSvg,
    href: "https://soundcloud.com/nuq-the-most-dope"
  },
  {
    logo: spotifySvg,
    href: "https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X"
  },
  {
    logo: teespringSvg,
    href: "https://teespring.com/stores/sadlilblackboy"
  },
  {
    logo: twitterSvg,
    href: "https://twitter.com/sadlilblackboy"
  },
  {
    logo: youtubeSvg,
    href: "https://www.youtube.com/channel/UCF-q9z4IF8CUWyj1_8hZDtg"
  }
];

const THREE_DAYS_MS = 86400 * 1000 * 3;
function getHasBeenThreeDays(dateStr: string | null) {
  if (dateStr == null) {
    return true;
  }
  return new Date().getTime() - new Date(dateStr).getTime() > THREE_DAYS_MS;
}

export const Layout = ({ children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const data = useStaticQuery(graphql`
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
  `);

  useEffect(() => {
    const lastVisit = localStorage.getItem("visitDate");
    if (getHasBeenThreeDays(lastVisit)) {
      localStorage.setItem("visitDate", new Date().toString());
      setIsTooltipVisible(true);
    }
  }, []);

  return (
    <React.Fragment>
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
      </Helmet>
      <Nav>
        <NavContainer>
          <LogoContainer href="/">
            <Img fixed={data.logo.childImageSharp.fixed} />
            <h1>SADLILBLACKBOY</h1>
          </LogoContainer>
          <SocialLinks>
            {socialLinks.map((l, i) => {
              const link = (
                <a key={l.href} href={l.href}>
                  <img src={l.logo} />
                </a>
              );

              if (i === 4) {
                return (
                  <Tippy
                    arrow={true}
                    arrowType="round"
                    content={"New! Buy Merch!"}
                    isVisible={isTooltipVisible}
                    key={l.href}
                    placement="bottom"
                    theme="q"
                  >
                    {link}
                  </Tippy>
                );
              }

              return link;
            })}
          </SocialLinks>
        </NavContainer>
      </Nav>
      {children}
    </React.Fragment>
  );
};
