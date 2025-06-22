"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function LandingPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"password" | "identity">("password");

  const router = useRouter();

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password === "blessed2025") {
      setStep("identity"); // Go to next step
      setIsLoading(false);
    } else {
      setError("Incorrect password. Please check with Timothy or Gracie.");
      setIsLoading(false);
    }
  };

  const handleIdentitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email.");
      return;
    }
    sessionStorage.setItem("registryAccess", "true");
    sessionStorage.setItem("guestEmail", email);
    router.replace("/registry");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Full Background Image */}
      <Image
        src="/registry_imgs/interior.jpg"
        alt="Wedding Background"
        fill
        className="object-cover object-center z-0"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Card Content */}
      <div className="relative z-10 w-full max-w-lg px-6 py-10 bg-white/80 shadow-2xl rounded-2xl border border-amber-200 backdrop-blur-lg">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif text-amber-900 tracking-tight">
            Welcome, Dear Guests
          </h1>
          <p className="text-base text-amber-800">
            We’re honoured to share this sacred moment with you. Please enter the password provided in your invitation.
          </p>
        </div>

        {step === "password" ? (
          <form onSubmit={handlePasswordSubmit} className="mt-8 space-y-5">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-amber-300 focus:border-amber-500 focus:ring-amber-500 bg-white/90"
              required
            />
            {error && (
              <p className="text-sm text-red-700 bg-red-100 py-2 px-3 rounded text-center">
                {error}
              </p>
            )}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white hover:bg-amber-800 py-2 rounded-md transition-all duration-200"
            >
              {isLoading ? "Verifying..." : "Enter Registry"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleIdentitySubmit} className="mt-8 space-y-5">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-amber-300 focus:border-amber-500 focus:ring-amber-500 bg-white/90"
              required
            />
            {error && (
              <p className="text-sm text-red-700 bg-red-100 py-2 px-3 rounded text-center">
                {error}
              </p>
            )}
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-amber-800 py-2 rounded-md transition-all duration-200"
            >
              Continue
            </Button>
          </form>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-amber-300 text-xs z-10 px-4">
        <p>
          Need help? Contact <span className="underline underline-offset-2">Timothy</span> for assistance.
        </p>
      </div>
    </div>
  );
}
