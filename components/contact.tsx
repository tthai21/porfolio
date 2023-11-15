import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section id="contact" className="mb-20">
      <SectionHeading title="Contact me"></SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a
          className="underline text-blue-900 cursor-pointer"
          href="mailto:trongducthai@gmail.com"
        >
          trongducthai@gmail.com
        </a>
      </p>
    </section>
  );
}
