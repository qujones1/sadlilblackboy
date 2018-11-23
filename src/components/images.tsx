import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { css } from "react-emotion";

const appleSvg = require("../assets/apple.svg") as string;
const instagramSvg = require("../assets/instagram.svg") as string;
const soundcloudSvg = require("../assets/soundcloud.svg") as string;
const spotifySvg = require("../assets/spotify.svg") as string;
const youtubeSvg = require("../assets/youtube.svg") as string;

const LogoStyle = css`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

const socialStyle = css`
  width: 35px;
  height: 35px;
`;

export const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 75) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img className={LogoStyle} fixed={data.file.childImageSharp.fixed} />
    )}
  />
);

export const Apple = () => <img className={socialStyle} src={appleSvg} />;
export const Instagram = () => (
  <img className={socialStyle} src={instagramSvg} />
);
export const SoundCloud = () => (
  <img className={socialStyle} src={soundcloudSvg} />
);
export const Spotify = () => <img className={socialStyle} src={spotifySvg} />;
export const Youtube = () => <img className={socialStyle} src={youtubeSvg} />;
