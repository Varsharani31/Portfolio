import { useState } from "react";
import { contact } from "../data/portfolio";
import { web3formsKey } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { MailIcon, PhoneIcon, LocationIcon, LinkedinIcon, GithubIcon, CodeIcon, CheckIcon } from "./Icons";

const itemIcons = { mail: MailIcon, phone: PhoneIcon, location: LocationIcon };
const socialIcons = { linkedin: LinkedinIcon, github: GithubIcon, code: CodeIcon };

export default function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const keyConfigured = !web3formsKey.startsWith("REPLACE_WITH_YOUR");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setSending(true);

    if (!keyConfigured) {
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.open(
        `mailto:${contact.items[0].value}?subject=${encodeURIComponent(form.subject || "Portfolio message")}&body=${body}`,
        "_self"
      );
      setSending(false);
      setStatus("Thanks! Your email app should have opened. Add your Web3Forms key to get messages in your inbox automatically.");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio message",
          message: form.message,
          replyto: form.email,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setForm({ name: "", email: "", subject: "", message: "" });
        setStatus("Message sent successfully! I'll get back to you soon.");
      } else {
        setStatus("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setStatus("Couldn't send right now. Please email me directly at ranikasliwal7@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <SectionHeading eyebrow="contact" title="Let's" highlight="Connect" />

        <div className="contact-grid">
          <Reveal delay={0.05}>
            <div>
              <p style={{ color: "var(--muted)", marginBottom: "1.6rem", maxWidth: "26rem" }}>
                {contact.intro}
              </p>
              <div className="contact-info">
                {contact.items.map((item) => {
                  const Icon = itemIcons[item.icon];
                  return (
                    <div key={item.label} className="card contact-card">
                      <span className="c-icon">
                        <Icon />
                      </span>
                      <div>
                        <h4>{item.label}</h4>
                        {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                      </div>
                    </div>
                  );
                })}
                <div className="social-row">
                  {contact.social.map((s) => {
                    const Icon = socialIcons[s.icon];
                    return (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn" aria-label={s.label}>
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form className="card contact-form" onSubmit={onSubmit}>
              <h3>Send a <span className="gradient-text">Message</span></h3>
              <p>Fill this in and hit send — it lands straight in my inbox.</p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">Name</label>
                  <input id="c-name" name="name" value={form.name} onChange={onChange} type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" value={form.email} onChange={onChange} type="email" placeholder="you@email.com" required />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label htmlFor="c-subject">Subject</label>
                <input id="c-subject" name="subject" value={form.subject} onChange={onChange} type="text" placeholder="Internship / opportunity / hello" />
              </div>

              <div className="form-group">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" value={form.message} onChange={onChange} placeholder="Write me something..." required />
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: "1.4rem", width: "100%", justifyContent: "center" }} disabled={sending}>
                <MailIcon />
                {sending ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className={`form-status ${status.includes("successfully") ? "form-ok" : ""}`}>
                  <CheckIcon style={{ width: "14px", height: "14px", marginRight: "0.4rem", verticalAlign: "-2px" }} />
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}