import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "react-emotion";
import { Layout } from "../components/layout";

const appleSvg = require("../assets/apple.svg") as string;
const spotifySvg = require("../assets/spotify.svg") as string;
const googlePng = require("../assets/googlePlay.png") as string;
const amazonPng = require("../assets/amazon.png") as string;
const soundcloudSvg = require("../assets/soundcloud2.png") as string;


const Playlist = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 50%;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    //display: none;
  }
`;

const Content = styled.section`
  display: flex;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const Page = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
`;

const Header = styled.h1`
  font-family: "edosz";
  font-weight: 400;
  text-align: center;
  color: white;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const StreamHeader = styled.h1`
  display: flex;
  font-family: "Helvetica Neue Condensed";
  font-weight: 400;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  background-color: white;
  margin-bottom: 0px;
`;

const Body = styled.div`
  background-color: white;
  display: flex;
  font-family: "Helvetica Neue Condensed";
  font-weight: 400;
  color: white;
`;

const ImgContainer = styled.a`
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 33%;
  }
`;

const PromoText = styled.span`
  font-family:  "Helvetica Neue";
  font-weight: 400;
  text-align: center;
  background-color: white;
  color: black;
`;

const StreamFrame = styled.div`
  flex: 50%;


`;

const Band = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family:  "Helvetica Neue";
  font-weight: 400;
  max-width: 100px;

`;

const StreamText = styled.span`
`;

const SocialImg = styled.img`
  width: 50px;
  margin: 10px auto;
  flex-basis: 100%;
`;

const MerchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;

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

export default ({ data }) => (
  <Layout>
    <Page>
      <Header>Let's all be sad together</Header>
      <Playlist>
        <iframe
          allow="autoplay"
          src="https://www.youtube.com/embed?listType=list&list=UUF-q9z4IF8CUWyj1_8hZDtg&autoplay=1"
        />
      </Playlist>
      <StreamHeader> Stream Everything, Everywhere </StreamHeader>
      <Body>
        <StreamFrame>
          <Band href="https://soundcloud.com/nuq-the-most-dope/sets/beats">
            <SocialImg src={soundcloudSvg} />
            <StreamText> Beats & Remixes </StreamText>
          </Band>
          <Band href="https://music.apple.com/us/artist/nuq/1403168719">
            <SocialImg src={appleSvg} />
            <StreamText> Apple Music </StreamText>
          </Band>
          <Band href="https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X">
            <SocialImg src={spotifySvg} />
            <StreamText> Spotify </StreamText>
          </Band>
          <Band href="https://play.google.com/store/music/artist/Nuq?id=A4rpx3jxzffw2uujehfixj7xbsq&hl=en">
            <SocialImg src={googlePng} />
            <StreamText> Google Play </StreamText>
          </Band>
          <Band href="https://music.amazon.com/artists/B0034XLVOO/nuq">
            <SocialImg src={amazonPng} />
            <StreamText> Amazon Music </StreamText>
          </Band>
        </StreamFrame>
        <StreamFrame>
          <Band href="https://soundcloud.com/nuq-the-most-dope/sets/singles">
            <SocialImg src={soundcloudSvg} />
            <StreamText> Singles </StreamText>
          </Band>
          <Band href="https://music.apple.com/us/artist/sadlilblackboy/1475838174">
            <SocialImg src={appleSvg} />
            <StreamText> Apple Music </StreamText>
          </Band>
          <Band href="https://open.spotify.com/artist/2tQyRoSW35TIkZRp3Kqsfa">
            <SocialImg src={spotifySvg} />
            <StreamText> Spotify </StreamText>
          </Band>
          <Band href="https://music.apple.com/us/artist/nuq/1403168719">
            <SocialImg src={googlePng} />
            <StreamText> Google Play </StreamText>
          </Band>
          <Band href="https://music.amazon.com/artists/B07W6XKTHC/sadlilblackboy">
            <SocialImg src={amazonPng} />
            <StreamText> Amazon Music </StreamText>
          </Band>
        </StreamFrame>
      </Body>
      <MerchContainer>

      </MerchContainer>
      <Content>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/happy-ending">
          <Img fluid={data.happy.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/we-had-fun">
          <Img fluid={data.whf.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/wilting-roses-fleeting-romance">
          <Img fluid={data.wrfr.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/late-nights">
          <Img fluid={data.latenights.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/sadlilblackboy-vol-2">
          <Img fluid={data.vol2.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/without-good-reason">
          <Img fluid={data.WithoutReason.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/hope">
          <Img fluid={data.hope.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/broken">
          <Img fluid={data.broken.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/ghev">
          <Img fluid={data.alone.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/fH50">
          <Img fluid={data.sad.childImageSharp.fluid} />
        </ImgContainer>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/fkO9">
          <Img fluid={data.vol1.childImageSharp.fluid} />
        </ImgContainer>
      </Content>
    </Page>
  </Layout>
);

export const query = graphql`
  {
    shirt: file(relativePath: { eq: "shirt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    happy: file(relativePath: { eq: "HappyEnding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    whf: file(relativePath: { eq: "we_had_fun.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wrfr: file(relativePath: { eq: "WRFR.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    latenights: file(relativePath: { eq: "latenights.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    vol2: file(relativePath: { eq: "vol2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    WithoutReason: file(relativePath: { eq: "Without_good_reason.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    hope: file(relativePath: { eq: "Hope.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    broken: file(relativePath: { eq: "Broken.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    alone: file(relativePath: { eq: "alone.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    vol1: file(relativePath: { eq: "vol1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    sad: file(relativePath: { eq: "sad.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
