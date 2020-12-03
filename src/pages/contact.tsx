import React from "react";
import { Layout } from "../components/Layout";

import { TextInput } from "../components/TextInput";
import { TextArea } from "../components/TextArea";

export default () => (
  <Layout header="contact">
    <form name="contact" method="POST" data-netlify="true" action="/success">
      <div className="space-y-2">
        <TextInput label="Name" name="name" placeholder="Rick Sanchez" />
        <TextInput label="Email" name="email" placeholder="name@domain.com" />
        <TextArea
          label="Message"
          name="message"
          placeholder="Tell me how you feel..."
        />
        <button
          className="rounded bg-blue-400 text-white py-1 px-3"
          type="submit"
        >
          Send
        </button>
      </div>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  </Layout>
);
