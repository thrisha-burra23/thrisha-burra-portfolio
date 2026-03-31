import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_swhwb75",
        "template_r3ivtau",
        form.current,
        "-KVsacV8taeiuTuO7",
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section id="contact" className="py-16 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Let's Connect 👋</h3>

            <p className="text-gray-600 mb-6">
              Open to full-stack developer roles, internships, and
              collaborations. Feel free to reach out — I’d love to connect!
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/thrisha-burra23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border rounded-xl hover:bg-gray-100"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/thrisha-burra/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border rounded-xl hover:bg-gray-100"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-3 border rounded-lg"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 border rounded-lg"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 border rounded-lg"
              required
            />

            {success && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
