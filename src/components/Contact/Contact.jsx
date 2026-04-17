import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current || isSending) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      form.current.reset();

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      toast.error(
        error?.text || error?.message || "Failed to send message. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        }
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-[12vw] py-24 md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <div className="mb-14 text-center">
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
          Let us build something great together
        </p>
        <h2 className="mt-6 text-4xl font-bold text-white">Contact</h2>
        <div className="mx-auto mt-4 h-1 w-28 bg-purple-500"></div>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
          I’m open to internships, freelance work, collaboration, and interesting opportunities.
          If you have an idea or a role in mind, feel free to reach out.
        </p>
      </div>

      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0d081f]/90 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(130,69,236,0.15)] sm:p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white">Send a message</h3>
          <p className="mt-2 text-sm text-gray-400">
            I usually reply as soon as possible.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-white/10 bg-[#131025] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-white/10 bg-[#131025] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded-xl border border-white/10 bg-[#131025] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
          />

          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="5"
            required
            className="w-full rounded-xl border border-white/10 bg-[#131025] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
          />

          <button
            type="submit"
            disabled={isSending}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-8 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            style={{
              boxShadow: "0 0 18px rgba(130,69,236,0.35)",
            }}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
