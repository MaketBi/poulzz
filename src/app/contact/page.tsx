"use client";

import { useState } from "react";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1F492E]">
              Contactez-nous
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Une question, un partenariat, une demonstration ? Ecrivez-nous.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#1F492E] rounded-3xl p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#31CC71]/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-[#31CC71]" />
                    </div>
                    <p className="mt-6 text-lg font-medium text-white">
                      Message envoye ! Nous vous repondrons rapidement.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-6 text-sm text-[#31CC71] hover:underline font-medium"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nom */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#31CC71] focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#31CC71] focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>

                    {/* Telephone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Telephone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#31CC71] focus:border-transparent"
                        placeholder="+221 7X XXX XX XX"
                      />
                    </div>

                    {/* Sujet */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#31CC71] focus:border-transparent appearance-none"
                      >
                        <option value="" disabled className="text-gray-900">
                          Selectionner un sujet
                        </option>
                        <option value="yonima" className="text-gray-900">
                          Yonima
                        </option>
                        <option value="skoolbi" className="text-gray-900">
                          Skoolbi
                        </option>
                        <option value="partenariat" className="text-gray-900">
                          Partenariat
                        </option>
                        <option value="autre" className="text-gray-900">
                          Autre
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#31CC71] focus:border-transparent resize-none"
                        placeholder="Votre message..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3 bg-[#D4500A] hover:bg-[#B8440A] text-white font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1F492E] mb-6">
                  Nos coordonnees
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#31CC71]/10 rounded-xl p-3">
                      <Mail className="h-5 w-5 text-[#31CC71]" />
                    </div>
                    <span className="text-gray-700 text-sm">
                      contact@poulzz.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#31CC71]/10 rounded-xl p-3">
                      <Phone className="h-5 w-5 text-[#31CC71]" />
                    </div>
                    <span className="text-gray-700 text-sm">
                      +221 76 295 70 97
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#31CC71]/10 rounded-xl p-3">
                      <MapPin className="h-5 w-5 text-[#31CC71]" />
                    </div>
                    <span className="text-gray-700 text-sm">
                      Dakar, Senegal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
