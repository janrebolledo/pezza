import React from "react";

function Contact() {
  return (
    <section className="bgradient grid grid-cols-1 md:grid-cols-2 px-5 py-8">
      <div>
        <h1 className="text-7xl">Contact</h1>
        <p>
          Let's get in touch and start your project today.
          <br />
          <br />
          Contact me via Email, or fill out this form.
        </p>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col gap-4"
      >
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="bg-neutral-800 px-6 py-4"
        />
        <label>Email</label>
        <input
          name="email"
          type="text"
          placeholder="name@example.com"
          required
          className="bg-neutral-800 px-6 py-4"
        />
        <label>Message</label>
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
