import { Button } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function ContactMe() {
  return (
    <section className="py-24 text-center">
      <h2 className="pb-12 text-center text-2xl font-bold uppercase tracking-widest text-secondary-light dark:text-secondary-dark">
        Contact Form
      </h2>
      <Link
        to="https://docs.google.com/forms/d/17fecXpY0G64QABPcjp_o8Vsf5DzErFWD6gH-6mJZVGg"
        target="_blank"
      >
        <Button>Link to Google Form</Button>
      </Link>
    </section>
  );
}
