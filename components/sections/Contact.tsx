"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { CheckCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-surface-1 border border-border/60 rounded-lg px-4 py-3 text-text placeholder:text-muted/50 text-sm focus:outline-none focus:border-primary focus:bg-surface-2 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all duration-200";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex flex-col py-24 bg-bg"
    >
      <div className="max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-center">
        <SectionLabel chapter="04" title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Headline + socials */}
          <motion.div
            initial={{ opacity: 0, x: prefersReduced ? 0 : -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h3
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { duration: 0.7, delay: 0.2, ease: "easeOut" }
              }
              className="font-heading text-3xl md:text-4xl font-bold text-text leading-snug mb-4"
            >
              Let&apos;s build something{" "}
              <span className="text-primary">great</span> together.
            </motion.h3>
            <p className="text-muted leading-relaxed mb-10">
              I&apos;m open to internship opportunities, freelance projects, and
              interesting collaborations. Drop me a message and I&apos;ll get back
              to you within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:alexander.jiw@gmail.com"
                className="flex items-center gap-3 text-muted hover:text-text transition-colors duration-200 group cursor-pointer"
              >
                <HiMail size={18} className="text-primary" />
                <span className="text-sm">alexander.jiw@gmail.com</span>
              </a>
              <a
                href="https://github.com/alexanderj03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-text transition-colors duration-200 group cursor-pointer"
              >
                <FaGithub size={17} className="text-primary" />
                <span className="text-sm">github.com/alexanderj03</span>
              </a>
              <a
                href="https://linkedin.com/in/alexanderjiw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-text transition-colors duration-200 group cursor-pointer"
              >
                <FaLinkedin size={17} className="text-primary" />
                <span className="text-sm">linkedin.com/in/alexanderjiw</span>
              </a>
            </div>
          </motion.div>

          {/* Right: EmailJS form */}
          <motion.div
            initial={{ opacity: 0, x: prefersReduced ? 0 : 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {status === "sent" ? (
              <div className="text-center py-16">
                <CheckCircle className="mx-auto mb-4 text-primary" size={40} strokeWidth={1.5} />
                <h4 className="font-heading text-xl font-semibold text-text mb-2">
                  Message sent!
                </h4>
                <p className="text-muted text-sm">
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8"
                noValidate
              >
                <div>
                  <label htmlFor="from_name" className="sr-only">Your name</label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={inputBase}
                    style={{
                      borderColor: errors.name ? "#ef4444" : undefined,
                    }}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="reply_to" className="sr-only">Your email</label>
                  <input
                    id="reply_to"
                    type="email"
                    name="reply_to"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={inputBase}
                    style={{
                      borderColor: errors.email ? "#ef4444" : undefined,
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`${inputBase} resize-none`}
                    style={{
                      borderColor: errors.message ? "#ef4444" : undefined,
                    }}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileTap={prefersReduced ? {} : { scale: 0.98 }}
                  className="w-full py-3.5 border border-primary/40 text-text font-semibold rounded-lg hover:border-primary hover:text-primary hover:shadow-[0_0_16px_rgba(99,102,241,0.2)] disabled:opacity-40 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-auto pt-8 border-t border-border">
        <p className="text-center text-xs text-muted">
          Designed & built by Alexander Jiw · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
