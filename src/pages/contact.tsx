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
  padding: 16px 8px;
`;

const FormContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  border-radius: 8px;
  padding: 12px;

  input,
  textarea {
    width: 90%;
    margin-top: 4px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  input {
    height: 35px;
  }

  textarea {
    height: 100px;
  }

  label {
    display: block;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;
  font-size: 16px;
`;

export default () => (
  <Layout>
    <Page>
      <h1>[contact]</h1>
      <FormContainer>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <label>Name:</label>
          <input type="text" name="name" placeholder="Rick Sanchez" required />
          <label>Email:</label>
          <input type="text" name="email" placeholder="name@domain.com" />
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Tell me how you feel..."
            required
          />
          <div>
            <SubmitButton type="submit">Send</SubmitButton>
          </div>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </FormContainer>
    </Page>
  </Layout>
);
