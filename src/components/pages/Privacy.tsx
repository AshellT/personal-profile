import LegalPage from "../layout/LegalPage";
import { config } from "../../constants/config";

const Privacy = () => {
  return (
    <LegalPage title="Privacy Policy." updated="August 3, 2026">
      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Overview</h2>
        <p className="mt-3">
          This Privacy Policy explains how {config.html.fullName} (“I”, “me”,
          “my”) collects and uses information when you visit this personal
          portfolio website or submit a project request through the contact
          form.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">
          Information I collect
        </h2>
        <p className="mt-3">
          When you use the contact form, you may provide:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Name</li>
          <li>Email address</li>
          <li>WhatsApp number (optional)</li>
          <li>Project brief / message content</li>
        </ul>
        <p className="mt-3">
          Basic technical data such as browser type, device information, and
          pages visited may also be processed by hosting or analytics providers
          used to operate the site.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">
          How information is used
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>To respond to website and project enquiries</li>
          <li>To prepare proposals, timelines, and next steps</li>
          <li>To improve site reliability and user experience</li>
          <li>To communicate about ongoing or potential work</li>
        </ul>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Sharing</h2>
        <p className="mt-3">
          I do not sell your personal information. Contact submissions may be
          processed through email delivery services (such as Resend) solely to
          deliver your message to{" "}
          <a
            href={`mailto:${config.html.email}`}
            className="font-medium text-accent hover:text-accent-hover"
          >
            {config.html.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Data retention</h2>
        <p className="mt-3">
          Enquiry information is kept only as long as needed to respond and
          manage the related conversation, unless a longer period is required
          for legal, security, or project delivery reasons.
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Your choices</h2>
        <p className="mt-3">
          You may request access to, correction of, or deletion of personal
          information you have submitted by emailing{" "}
          <a
            href={`mailto:${config.html.email}`}
            className="font-medium text-accent hover:text-accent-hover"
          >
            {config.html.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="display-font text-[1.6rem] text-ink">Contact</h2>
        <p className="mt-3">
          For privacy questions, contact {config.html.fullName} at{" "}
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

export default Privacy;
