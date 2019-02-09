import "../assets/layout.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "react-emotion";
import Helmet from "react-helmet";

const appleSvg = require("../assets/apple.svg") as string;
const instagramSvg = require("../assets/instagram.svg") as string;
const soundcloudSvg = require("../assets/soundcloud.svg") as string;
const spotifySvg = require("../assets/spotify.svg") as string;
const youtubeSvg = require("../assets/youtube.svg") as string;
const twitterSvg = require("../assets/twitter.svg") as string;


const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  border-bottom: 6px solid #d02120;
`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    height: 35px;
  }
`;

const socialLinks = [
  {
    logo: appleSvg,
    href: "https://itunes.apple.com/us/artist/nuq/1403168719"
  },
  { logo: instagramSvg, href: "https://www.instagram.com/sadlilblackboy/" },
  { logo: soundcloudSvg, href: "https://soundcloud.com/nuq-the-most-dope" },
  {
    logo: spotifySvg,
    href: "https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X"
  },
  {
    logo: youtubeSvg,
    href: "https://www.youtube.com/channel/UCF-q9z4IF8CUWyj1_8hZDtg"
  },
  {
    logo: twitterSvg,
    href: "https://twitter.com/SadLilBlackBoy"
  }
];

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
    `}
    render={data => (
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
              {socialLinks.map(l => (
                <a key={l.href} href={l.href}>
                  <img src={l.logo} />
                </a>
              ))}
            </SocialLinks>
          </NavContainer>
        </Nav>
        {children}
      </React.Fragment>
    )}
  />
);
