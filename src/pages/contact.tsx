import React from "react";
import styled from "@emotion/styled";
import { Layout } from "../components/layout";

const Page = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  flex-direction: column;
  font-family: "Helvetica Neue Condensed";
  color: white;

  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

const Sub = styled.div`
  display: inline-block;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  border-radius: 8px;
  padding: 4px 16px;

  p {
    margin-top: 2px;
    margin-bottom: 25px;
  }

  h1 {
    margin-bottom: 5px;
  }

  input {
    width: 90%;
    height: 35px;
  }

  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 6px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  input {
    margin-top: 5px;
  }

  a:link {
    text-decoration: none;
    color: red;
  }

  form input[required="required"]:after,
  form select[required="required"]:after,
  form textarea[required="required"]:after {
    color: red;
    content: " *";
  }

  label {
    display: block;
    padding: 5px;
    margin-bottom: 1px;
  }

  textarea {
    margin-bottom: 15px;
  }
`;

export default ({ data }) => (
  <Layout>
    <Page>
      <h1>[contact]</h1>
      <Sub>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <div>
            <label>
              Name:<br></br>
              <input
                type="text"
                name="name"
                placeholder="Rick Sanchez"
                required
              />
            </label>
            <p></p>
          </div>
          <div>
            <label>
              Email:<br></br>
              <input type="text" name="email" placeholder="name@domain.com" />
            </label>
            <p></p>
          </div>
          <div>
            <label>
              Message:<br></br>
              <textarea
                name="message"
                placeholder="Tell me how you feel . . ."
                required
                style={{ width: "80%", height: "100px" }}
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </Sub>
    </Page>
  </Layout>
);
