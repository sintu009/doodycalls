import React, { useState } from "react";

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "86fd0121-ef18-42bc-8354-bc1bab08fb71");

    // receiver email
    formData.append("to_email", "greenwalksdc@gmail.com");

    // optional sender info
    formData.append("from_name", "DoodyCalls - Quote Request Form");

    // user inputs
    formData.append("name", form.name);
    formData.append("contact", form.contact);
    formData.append("email", form.email);
    formData.append("message", form.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setSuccessMsg("Your request has been submitted successfully! 🎉");
      setForm({ name: "", contact: "", email: "", message: "" });

      setTimeout(() => {
        setSuccessMsg("");
        onClose();
      }, 2000);
    } else {
      setSuccessMsg("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl relative rounded-3xl">
        {/* Close Button */}
        <button
          className="absolute top-6 right-10 text-3xl text-gray-400 hover:text-gray-700 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get a Quote</h2>

          {/* Success Message */}
          {successMsg && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
              {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F28C28]"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Contact No.
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F28C28]"
                  placeholder="Contact Number"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F28C28]"
                placeholder="example@company.com"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F28C28] resize-none"
                placeholder="Type your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-[#F28C28] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e07a1f] transition-all hover:shadow-lg transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteModal;
