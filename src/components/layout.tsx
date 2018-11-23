import "../assets/layout.css";
import { StaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "react-emotion";
import Helmet from "react-helmet";

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;
  height: 100vh;
`;

const Nav = styled.nav`
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
`;

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Main>{children}</Main>
      </React.Fragment>
    )}
  />
);
