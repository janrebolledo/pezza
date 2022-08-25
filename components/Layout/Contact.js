import React from "react";

function Contact() {
  return (
    <section className="bgradient grid grid-cols-1 md:grid-cols-2 px-5 py-8">
      <div>
        <h1 className="text-5xl md:text-7xl shape rect-o-d">Contact</h1>
        <p className="font-bold">
          Let&apos;s get in touch and start your project today.
          <br />
          <br />
          Contact me via{" "}
          <a href="mailto:pezzavfx@gmail.com" className="underline">
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
  );
}

export default Contact;
