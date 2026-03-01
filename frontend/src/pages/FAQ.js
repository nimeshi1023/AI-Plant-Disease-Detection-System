import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/Footer';

// FAQ data
const faqData = [
  {
    question: "Do you use DT cleaning products?",
    answer:
      "Yes. We use safe, eco-friendly cleaning products that are safe for your family, pets, and the environment."
  },
  {
    question: "Can I get an estimate over the phone?",
    answer:
      "Yes, we can provide an estimate over the phone. However, final pricing may vary depending on property size and condition."
  },
  {
    question: "Do you provide commercial cleaning services?",
    answer:
      "Yes. We offer both residential and commercial cleaning services across New Zealand."
  },
  {
    question: "Are your cleaners insured?",
    answer:
      "Absolutely. Our team is fully trained, insured, and background-checked for your peace of mind."
  },
  {
    question: "What areas do you service?",
    answer:
      "We currently provide services across Auckland and surrounding areas."
  }
];

// Simple floating chatbot component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    // Demo bot reply (can integrate AI API later)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "Thanks for your question! We'll respond shortly." }
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-w-full bg-white rounded-xl shadow-xl z-50 flex flex-col overflow-hidden">
          <div className="bg-blue-700 text-white p-4 font-bold">FAQ Chatbot</div>
          <div className="p-4 flex-1 overflow-y-auto space-y-3 h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-700 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex border-t">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-4 py-2 outline-none"
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button className="bg-blue-700 text-white px-4" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-32 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 data-aos="fade-down" className="text-5xl md:text-6xl font-extrabold mb-6">
            Frequently Asked Questions
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl opacity-90 max-w-3xl mx-auto">
            Find answers to common questions about our cleaning services.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div data-aos="fade-right">
            <img
              src="/service.jpg"
              alt="Cleaning Service"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          {/* RIGHT FAQ */}
          <div data-aos="fade-left">
            <h2 className="text-4xl font-extrabold mb-10 text-gray-800">
              Your Questions Answered
            </h2>

            {faqData.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="mb-6 bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full font-bold">
                      ?
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  </div>
                  <span className="text-2xl">{activeIndex === index ? "−" : "+"}</span>
                </button>

                {activeIndex === index && (
                  <div className="px-20 pb-6 text-gray-600 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     <Footer />

      {/* CHATBOT */}
      <Chatbot />
    </>
  );
};

export default FAQ;