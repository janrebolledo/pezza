import React from "react";
import Head from "next/head";
import { createClient } from "contentful";

import ContactSection from "../components/Layout/ContactSection";

const metadata = {
  title: "Pezza VFX — Contact",
  description: "Contact Pezza VFX.",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography",
};

function Contact({ copy }) {
  return (
    <main className="text-white">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />

        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <section
        className="bgradient grid grid-cols-1 md:grid-cols-2 px-5 py-8 min-h-screen items-center"
        id="contact"
        data-netlify="true"
        method="POST"
      >
        <div>
          <h1 className="text-5xl md:text-7xl shape rect-o-d">Contact</h1>
          <p className="font-bold">
            Let&apos;s get in touch and start your project today.
            <br />
            <br />
            Contact me via{" "}
            <a href="mailto:perrybriggs@pezzavfx.com" className="underline">
              Email
            </a>
            , or fill out this form.
          </p>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="font-bold">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="bg-neutral-800 px-6 py-4"
          />
          <label className="font-bold">Email</label>
          <input
            name="email"
            type="text"
            placeholder="name@example.com"
            required
            className="bg-neutral-800 px-6 py-4"
          />
          <label className="font-bold">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="bg-neutral-800 px-6 py-4"
          />
          <button className="btn">Send &rarr;</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntry("3YyunYoPT2MlpeAMRT6w0F");

  return {
    props: {
      copy: res.fields,
    },
  };
}
