import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "@emotion/styled";
import { Layout } from "../components/layout";

const appleSvg = require("../assets/AppleSquare.png") as string;
const spotifySvg = require("../assets/spotify.svg") as string;
const googlePng = require("../assets/googlePlay.png") as string;
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
  margin-top: 4px;
  margin-bottom: 8px;
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
  margin-bottom: 0;
  padding-top: 4px;
  padding-bottom: 12px;
`;

const Body = styled.div`
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

const StreamFrame = styled.div`
  flex: 50%;
  position: relative;
`;

const Band = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,1);
  border-radius: 8px;
  padding: 5px 12px;
  position: absolute;
  z-index: 3;
  bottom: 8px;
  left: 155px;

  @media (max-width: 800px) {
    box-shadow: 0 2px 8px 0 rgba(0,0,0,1);
    padding: 0px 5px;
    bottom: 4px;
    left: 8px;
  }

  img {
    width 30px;
    padding-left: 3px;
    padding-right: 2px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const ReleaseFrame = styled.div`
  flex: 50%;
  position: relative;
`;

const ReleaseHeader = styled.h1`
  display: flex;
  font-family: "Helvetica Neue Condensed";
  font-weight: 400;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  background-color: white;
  margin-bottom: 0;
  padding-top: 4px;
  padding-bottom: 12px;
`;

const MerchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;

  div {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  h1 {
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
          src="https://www.youtube.com/embed/videoseries?list=PL8vjFV9ndmZuBfln4WFo8ZH_lhdCOP9us"
        />
      </Playlist>
      <StreamHeader> Stream Everything, Everywhere </StreamHeader>
      <Body>
        <StreamFrame>
          <Img className="imgBack" fluid={data.singles.childImageSharp.fluid} />
          <Band>
            <ImgContainer href="https://soundcloud.com/nuq-the-most-dope/sets/singles">
              <img src={soundcloudSvg} />
            </ImgContainer>
            <ImgContainer href="https://music.apple.com/us/artist/sadlilblackboy/1475838174">
              <img src={appleSvg} />
            </ImgContainer>
            <ImgContainer href="https://open.spotify.com/artist/2tQyRoSW35TIkZRp3Kqsfa">
              <img src={spotifySvg} />
            </ImgContainer>
            <ImgContainer href="https://play.google.com/store/music/artist?id=Auvlyweyebd3pd5vqpgjcxcukiu">
              <img src={googlePng} />
            </ImgContainer>
          </Band>
        </StreamFrame>
        <StreamFrame>
          <Img className="imgBack" fluid={data.beats.childImageSharp.fluid} />
          <Band>
            <ImgContainer href="https://soundcloud.com/nuq-the-most-dope/sets/beats">
              <img src={soundcloudSvg} />
            </ImgContainer>
            <ImgContainer href="https://music.apple.com/us/artist/nuq/1403168719">
              <img src={appleSvg} />
            </ImgContainer>
            <ImgContainer href="https://open.spotify.com/artist/4oQFbIzjeTpjBFjB6Zri2X">
              <img src={spotifySvg} />
            </ImgContainer>
            <ImgContainer href="https://play.google.com/store/music/artist/Nuq?id=A4rpx3jxzffw2uujehfixj7xbsq&hl=en">
              <img src={googlePng} />
            </ImgContainer>
          </Band>
        </StreamFrame>
      </Body>
      <Body>
        <ReleaseFrame>
          <ImgContainer href="https://distrokid.com/hyperfollow/sadlilblackboyandnuq/counting-the-days">
            <Img fluid={data.singleRelease.childImageSharp.fluid} />
          </ImgContainer>
        </ReleaseFrame>
        <ReleaseFrame>
          <ImgContainer href="https://distrokid.com/hyperfollow/nuq/leave-us">
            <Img fluid={data.beatRelease.childImageSharp.fluid} />
          </ImgContainer>
        </ReleaseFrame>
      </Body>
      <MerchContainer></MerchContainer>
      <Content>
        <ImgContainer href="https://distrokid.com/hyperfollow/nuq/human-holiday">
          <Img fluid={data.holiday.childImageSharp.fluid} />
        </ImgContainer>
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
    beatRelease: file(relativePath: { eq: "leave_us.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    singleRelease: file(relativePath: { eq: "ctd.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    beats: file(relativePath: { eq: "beatsart.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    singles: file(relativePath: { eq: "singleart.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    holiday: file(relativePath: { eq: "holiday.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
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
