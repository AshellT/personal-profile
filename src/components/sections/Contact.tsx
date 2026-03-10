import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
};

type ToastState = {
  type: "success" | "error";
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<FormState>(INITIAL_STATE as FormState);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const toastTimerRef = useRef<number | undefined>();

  const showToast = (type: ToastState["type"], message: string) => {
    setToast({ type, message });

    if (toastTimerRef.current) {
      globalThis.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = globalThis.setTimeout(() => {
      setToast(null);
    }, 3600);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        globalThis.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showToast("error", "Please complete all fields before submitting.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/request-website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          whatsapp: form.whatsapp,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send request.");
      }

      showToast("success", "Your website request was sent successfully.");
      setForm(INITIAL_STATE as FormState);
    } catch (error) {
      console.error(error);
      showToast("error", "Could not send your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="pointer-events-none fixed inset-x-4 top-24 z-[60] mx-auto w-full max-w-md"
          >
            <div
              className={`rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-md ${
                toast.type === "success"
                  ? "border-cyan-300/40 bg-slate-900/90"
                  : "border-rose-300/40 bg-slate-900/95"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    toast.type === "success"
                      ? "bg-cyan-400 text-slate-900"
                      : "bg-rose-400 text-slate-900"
                  }`}
                >
                  {toast.type === "success" ? "OK" : "!"}
                </div>
                <div>
                  <p className="headline-font text-sm font-semibold text-white">
                    {toast.type === "success" ? "Message Sent" : "Send Failed"}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{toast.message}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div
        className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 flex-[0.9] rounded-2xl p-8 md:p-10"
        >
          <Header useMotion={false} {...config.contact} />

          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-9"
          >
            {Object.keys(config.contact.form).map((input) => {
              const { span, placeholder } =
                config.contact.form[input as keyof typeof config.contact.form];
              const Component = input === "message" ? "textarea" : "input";

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-4 text-[15px] font-medium text-white md:text-base">
                    {span}
                  </span>
                  <Component
                    type={
                      input === "email"
                        ? "email"
                        : input === "whatsapp"
                          ? "tel"
                          : "text"
                    }
                    name={input}
                    value={form[input as keyof FormState]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 text-[15px] font-medium text-white outline-none md:py-5 md:text-base"
                    {...(input === "message" && { rows: 7 })}
                  />
                </label>
              );
            })}
            <button
              type="submit"
              className="bg-tertiary shadow-primary w-fit rounded-xl px-9 py-3.5 text-[15px] font-bold text-white shadow-md outline-none md:px-10 md:py-4"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="pointer-events-none h-[320px] overflow-hidden rounded-2xl md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
