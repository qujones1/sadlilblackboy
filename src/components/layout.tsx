import "../assets/layout.css";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React, { useEffect, useState } from "react";
import Tippy from "@tippy.js/react";
import styled from "@emotion/styled";
import Helmet from "react-helmet";

const appleSvg = require("../assets/apple.svg") as string;
const instagramSvg = require("../assets/instagram2.png") as string;
const soundcloudSvg = require("../assets/soundcloud2.png") as string;
const spotifySvg = require("../assets/spotify.svg") as string;
const teespringSvg = require("../assets/teespring2.png") as string;
const twitterSvg = require("../assets/twitter2.png") as string;
const youtubeSvg = require("../assets/youtube2.png") as string;
const bandcampSvg = require("../assets/Bandcamp.svg") as string;
const tiktokSvg = require("../assets/tiktok.png") as string;

const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  background-image: url("../src/assets/banner6.jpg");
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
    font-family: "Helvetica Neue Condensed";
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

const TopNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  a + a {
    border-left: 2px solid black;
  }

  a {
    padding: 0 4px;
    text-decoration: none;
  }
`;

const socialLinks = [
  {
    logo: instagramSvg,
    href: "https://www.instagram.com/sadlilblackboy/"
  },
  {
    logo: soundcloudSvg,
    href: "https://soundcloud.com/nuq-the-most-dope"
  },
  {
    logo: bandcampSvg,
    href: "https://sadlilblackboy.bandcamp.com/"
  },
  {
    logo: teespringSvg,
    href: "https://teespring.com/stores/sadlilblackboy"
  },
  {
    logo: tiktokSvg,
    href: "https://vm.tiktok.com/7xopMR/"
  },
  {
    logo: twitterSvg,
    href: "https://twitter.com/sadlilblackboy"
  },
  {
    logo: youtubeSvg,
    href: "https://www.youtube.com/c/sadlilblackboy?sub_confirmation=1"
  }
];

const THREE_DAYS_MS = 86400 * 1000 * 1;
function getHasBeenThreeDays(dateStr: string | null) {
  if (dateStr == null) {
    return true;
  }
  return new Date().getTime() - new Date(dateStr).getTime() > THREE_DAYS_MS;
}

function menuFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
      egirl: file(relativePath: { eq: "egirl_logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 20) {
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
            <h1>[sadlilblackboy]</h1>
          </LogoContainer>
          <SocialLinks>
            {socialLinks.map((l, i) => {
              const link = (
                <a key={l.href} href={l.href}>
                  <img src={l.logo} />
                </a>
              );

              if (i === 3) {
                return (
                  <Tippy
                    arrow={true}
                    arrowType="round"
                    content="New Merch Here!"
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
        <TopNav>
          <a href="/">Home</a>
          <a href="/playlists">Playlists</a>
          <a href="https://teespring.com/stores/sadlilblackboy">Merch</a>
          <a href="/submit">Submissions</a>
          <a href="/contact">Contact</a>
        </TopNav>
      </Nav>
      {children}
    </React.Fragment>
  );
};
