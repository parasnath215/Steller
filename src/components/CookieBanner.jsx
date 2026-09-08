import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('stellar_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('stellar_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('stellar_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white rounded-2xl shadow-2xl border border-[#00C2CB]/25 p-5 animate-fadeIn">
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-[#00C2CB]/10 text-stellar-cyan flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-sm text-stellar-dark">Cookie Consent</h4>
          <p className="text-xs text-stellar-muted leading-relaxed">
            We use cookies to improve your experience on our site. By using our site, you consent to our privacy terms.
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 text-xs">
        <button
          onClick={handleReject}
          className="px-3.5 py-1.5 rounded-lg border border-gray-200 text-stellar-dark hover:bg-gray-50 font-semibold"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="btn-primary text-xs px-4 py-1.5 font-bold shadow-sm"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
