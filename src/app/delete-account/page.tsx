"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Step = "form" | "otp" | "success";

const apps = [
  { value: "yonima-plus", label: "Yonima Plus (Client)" },
  { value: "yonima-rider", label: "Yonima Rider (Livreur)" },
  { value: "yonima-vendeur", label: "Yonima Vendeur (Commercant)" },
  { value: "all", label: "Toutes les applications" },
];

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function DeleteAccountPage() {
  const [step, setStep] = useState<Step>("form");
  const [phone, setPhone] = useState("");
  const [app, setApp] = useState("");
  const [reason, setReason] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formatPhone = (value: string) => {
    // Remove all non-digit characters except +
    let cleaned = value.replace(/[^\d+]/g, "");

    // Ensure it starts with +221 for Senegal
    if (cleaned.startsWith("00221")) {
      cleaned = "+" + cleaned.slice(2);
    } else if (cleaned.startsWith("221") && !cleaned.startsWith("+")) {
      cleaned = "+" + cleaned;
    } else if (cleaned.startsWith("7") && cleaned.length <= 9) {
      cleaned = "+221" + cleaned;
    } else if (!cleaned.startsWith("+") && cleaned.length > 0) {
      cleaned = "+221" + cleaned;
    }

    return cleaned;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formattedPhone = formatPhone(phone);

    if (!formattedPhone || formattedPhone.length < 12) {
      setError("Veuillez entrer un numero de telephone valide.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/simple-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            phone: formattedPhone,
            action: "send",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Erreur lors de l'envoi du code");
      }

      setPhone(formattedPhone);
      setStep("otp");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erreur lors de l'envoi du code. Veuillez reessayer."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/request-account-deletion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            phone,
            otp,
            app,
            reason: reason || null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Code invalide ou expire");
      }

      setStep("success");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Code invalide ou expire. Veuillez reessayer."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/simple-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            phone,
            action: "send",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Erreur lors du renvoi du code");
      }

      setOtp("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erreur lors du renvoi du code."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (step === "success") {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Demande envoyee
            </h2>
            <p className="mt-4 text-gray-500">
              Votre demande de suppression de compte a ete enregistree. Notre
              equipe traitera votre demande dans un delai de 30 jours. Vous
              recevrez une confirmation par SMS.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center text-[#F4541D] font-medium hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour a l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Supprimer mon compte
          </h1>
          <p className="mt-2 text-gray-500">
            {step === "form"
              ? "Remplissez le formulaire ci-dessous pour demander la suppression de votre compte."
              : "Entrez le code de verification envoye par SMS."}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
          {step === "form" ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Numero de telephone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+221 77 123 45 67"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4541D] focus:border-transparent"
                />
                <p className="mt-1 text-xs text-gray-400">
                  Le numero associe a votre compte Yonima
                </p>
              </div>

              {/* App Selection */}
              <div>
                <label
                  htmlFor="app"
                  className="block text-sm font-medium text-gray-700"
                >
                  Application concernee
                </label>
                <select
                  id="app"
                  value={app}
                  onChange={(e) => setApp(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4541D] focus:border-transparent bg-white"
                >
                  <option value="">Selectionnez une application</option>
                  {apps.map((appOption) => (
                    <option key={appOption.value} value={appOption.value}>
                      {appOption.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reason */}
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700"
                >
                  Raison (optionnel)
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  placeholder="Dites-nous pourquoi vous souhaitez supprimer votre compte..."
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4541D] focus:border-transparent resize-none"
                />
              </div>

              {/* Warning */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-medium">Attention</p>
                    <p className="mt-1">
                      La suppression de votre compte est irreversible. Toutes vos
                      donnees seront definitivement supprimees, y compris votre
                      historique de commandes, vos adresses enregistrees et vos
                      points de fidelite.
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-[#F4541D] text-white font-medium rounded-xl hover:bg-[#E04A15] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Envoi en cours...
                  </>
                ) : (
                  "Recevoir le code de verification"
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              {/* OTP Input */}
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Code de verification
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  required
                  maxLength={6}
                  placeholder="123456"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4541D] focus:border-transparent text-center text-2xl tracking-widest"
                />
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Code envoye au {phone}
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || otp.length !== 6}
                className="w-full py-3 px-4 bg-[#F4541D] text-white font-medium rounded-xl hover:bg-[#E04A15] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Verification...
                  </>
                ) : (
                  "Confirmer la suppression"
                )}
              </button>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setStep("form");
                    setOtp("");
                    setError("");
                  }}
                  className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors"
                >
                  Modifier le numero
                </button>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={isLoading}
                  className="text-[#F4541D] text-sm font-medium hover:underline disabled:opacity-50"
                >
                  Renvoyer le code
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Help Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Besoin d&apos;aide ?{" "}
          <Link href="/contact" className="text-[#F4541D] hover:underline">
            Contactez notre support
          </Link>
        </p>
      </div>
    </div>
  );
}
