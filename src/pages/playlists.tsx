import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";

const playlists = [
  {
    imgName: "indie",
    name: "Lofi Indie Pop & Rap",
    url:
      "https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/0TAWgrvtM2CbEA1i5LJKzn?si=gn06T5nxQF2GcNTdf4x15Q",
  },
  {
    imgName: "vibe",
    name: "Sadboy Vibe Check🖤",
    url:
      "https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/5aCocgqPZe6HzPpmFZ0xnh?si=wrrxPvRiTwabudKYSPGJ5Q",
  },
  {
    imgName: "brkn",
    name: "Lofi Brokenhearts💔",
    url:
      "https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/2JVL6yReaTAjfwLOlQyMmi?si=vJRSWz6RQZqXamXgpE7kHw",
  },
  {
    imgName: "luvfi",
    name: "Luv-Fi",
    url:
      "https://open.spotify.com/user/obrrre72hc1w1ntf6zx7j216o/playlist/1ChoBnlB55d8LbV1RjEV2c?si=ulUB2ZVMQ2Cz4Pmq7d74MA",
  },
  {
    imgName: "cafe",
    name: "90s Lofi Cafe",
    url: "https://open.spotify.com/playlist/1pSDbygGELt1cdNyhuuIK4",
  },
  {
    imgName: "smoke",
    name: "Lofi & Smoke",
    url: "https://open.spotify.com/playlist/4NNvLZeUDLftDbdUwDyqrt",
  },
];

export default ({ data }) => (
  <Layout header="playlists">
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-1 gap-y-2">
      {playlists.map((playlist) => (
        <a className="text-sm" key={playlist.imgName} href={playlist.url}>
          {playlist.name}
          <Image fluid={data[playlist.imgName].childImageSharp.fluid} />
        </a>
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  {
    indie: file(relativePath: { eq: "images/playlists/indie2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    vibe: file(relativePath: { eq: "images/playlists/vibecheck.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    brkn: file(relativePath: { eq: "images/playlists/roses.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    luvfi: file(relativePath: { eq: "images/playlists/luvfi.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    cafe: file(relativePath: { eq: "images/playlists/cafe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    smoke: file(relativePath: { eq: "images/playlists/lofismoke.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
