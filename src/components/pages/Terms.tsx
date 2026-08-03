import LegalPage from "../layout/LegalPage";
import { config } from "../../constants/config";

const Terms = () => {
  return (
    <LegalPage title="Terms of Use." updated="August 3, 2026">
      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Agreement</h2>
        <p className="mt-3">
          By accessing this website, you agree to these Terms of Use. If you do
          not agree, please do not use the site or contact form.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Purpose</h2>
        <p className="mt-3">
          This site is a personal portfolio for {config.html.fullName},
          showcasing selected work, experience, and credentials, and providing a
          way to request website or product development services.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">
          Intellectual property
        </h2>
        <p className="mt-3">
          Site design, branding (including ATG marks), copy, and original
          materials are owned by {config.html.fullName} / ATG Digital Agency
          unless otherwise stated. Client project materials remain subject to
          their respective ownership and confidentiality arrangements.
        </p>
        <p className="mt-3">
          You may not copy, redistribute, or reuse site content for commercial
          purposes without prior written permission.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">
          Project enquiries
        </h2>
        <p className="mt-3">
          Submitting a contact form does not create a binding contract. Any
          engagement for paid work is confirmed separately in writing (proposal,
          statement of work, or agreement).
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">
          Accuracy of information
        </h2>
        <p className="mt-3">
          Portfolio case studies and descriptions are provided in good faith.
          Project outcomes, metrics, and third-party names are presented for
          professional context and may be updated over time.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">
          Third-party links
        </h2>
        <p className="mt-3">
          This site may link to external platforms (for example ATG Digital
          Agency, GitHub, LinkedIn, live demos, or credential providers). I am
          not responsible for the content or practices of third-party sites.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Limitation</h2>
        <p className="mt-3">
          The website is provided “as is.” To the fullest extent permitted by
          law, I am not liable for indirect or consequential losses arising from
          use of the site.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Contact</h2>
        <p className="mt-3">
          Questions about these terms can be sent to{" "}
          <a
            href={`mailto:${config.html.email}`}
            className="font-medium text-accent hover:text-accent-hover"
          >
            {config.html.email}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
};

export default Terms;
