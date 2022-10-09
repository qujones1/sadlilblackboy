import { graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { Layout } from "../components/Layout";

const playlists = [
  {
    imgName: "indie",
    name: "Lofi Indie Pop & Rap",
    url:
      "https://open.spotify.com/embed/playlist/0TAWgrvtM2CbEA1i5LJKzn?si=gn06T5nxQF2GcNTdf4x15Q",
  },
  {
    imgName: "vibe",
    name: "Sadboy Vibe Check🖤",
    url:
      "https://open.spotify.com/embed/playlist/5aCocgqPZe6HzPpmFZ0xnh?utm_source=generator",
  },
  {
    imgName: "brkn",
    name: "Lofi Brokenhearts💔",
    url:
      "https://open.spotify.com/embed/playlist/2JVL6yReaTAjfwLOlQyMmi?si=vJRSWz6RQZqXamXgpE7kHw",
  },
  {
    imgName: "luvfi",
    name: "Luv-Fi",
    url:
      "https://open.spotify.com/embed/playlist/1ChoBnlB55d8LbV1RjEV2c?si=ulUB2ZVMQ2Cz4Pmq7d74MA",
  },
  {
    imgName: "cafe",
    name: "90s Lofi Cafe",
    url: "https://open.spotify.com/embed/playlist/1pSDbygGELt1cdNyhuuIK4",
  },
  {
    imgName: "smoke",
    name: "Lofi & Smoke",
    url: "https://open.spotify.com/embed/playlist/4NNvLZeUDLftDbdUwDyqrt",
  },
  {
    imgName: "rebelmusic",
    name: "The Rebel Music",
    url:
      "https://open.spotify.com/embed/playlist/447Wsi32NY9Ckm6Neg0vmo?si=267d116028944ef1",
  },
  {
    imgName: "snowynights",
    name: "Snowy Nights ❄️",
    url: "https://open.spotify.com/embed/playlist/3h2tED6F5pVPmYWcqpkdAU?si=80400e29184942e9",
  },
  {
    imgName: "loficovers",
    name: "Lo-Fi Remixes & Covers",
    url: "https://open.spotify.com/embed/playlist/6akjrp5uSUHkEEhC8KWHXY?si=7bf79dbf59af4b7f",
  },
];


export default ({ data }) => (
  <Layout header="playlists">
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-2">
      {playlists.map((playlist) => (
        <iframe className="text-sm" key={playlist.imgName} src={playlist.url} width="106%" height = "210px" frameborder="0" allowtransparency="true">
          {playlist.name}
        </iframe>
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
    rebelmusic: file(relativePath: { eq: "images/playlists/rebelmusic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    snowynights: file(relativePath: { eq: "images/playlists/snowynights.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    loficovers: file(relativePath: { eq: "images/playlists/loficovers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
