import React from "react";
import { Layout } from "../components/Layout";

export default () => (
  <Layout>
    <h1 className="text-2xl mb-2">[contact]</h1>
    <form name="contact" method="POST" data-netlify="true" action="/success">
      <div className="flex">
        <label>Name:</label>
        <input
          className="ml-1 flex-grow"
          type="text"
          name="name"
          placeholder="Rick Sanchez"
          required
        />
      </div>
      <div className="flex">
        <label>Email:</label>
        <input
          className="ml-1 flex-grow"
          type="text"
          name="email"
          placeholder="name@domain.com"
        />
      </div>
      <div className="flex flex-col">
        <label>Message:</label>
        <textarea
          name="message"
          placeholder="Tell me how you feel..."
          required
        />
      </div>
      <button
        className="rounded bg-green-400 text-white py-1 px-3 mt-1"
        type="submit"
      >
        Send
      </button>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  </Layout>
);
