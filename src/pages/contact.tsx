import React from "react";
import { Layout } from "../components/layout";

export default () => (
  <Layout>
    <div>
      <h1>[contact]</h1>
      <div>
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
            <button type="submit">Send</button>
          </div>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </div>
    </div>
  </Layout>
);
