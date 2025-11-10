import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const STORAGE_KEY = "cookie_preferences";

function CookieRow({ icon, title, description, checked, onChange, disabled }) {
  const isEssential = disabled;

  const disabledStyles =
    "cursor-not-allowed bg-gray-200 dark:bg-gray-600 justify-end";
  const disabledKnobStyles = "bg-white dark:bg-gray-400";
  const toggleContainerClasses = `relative flex h-[31px] w-[51px] items-center rounded-full border-none p-0.5 transition-all ${
    isEssential
      ? disabledStyles
      : `cursor-pointer bg-gray-200 dark:bg-gray-600 has-[:checked]:justify-end has-[:checked]:bg-[#001f3f] dark:has-[:checked]:bg-[#D4AF37]`
  }`;
  const knobClasses = `h-full w-[27px] rounded-full transition-transform ${
    isEssential
      ? disabledKnobStyles
      : "bg-white transition-transform dark:bg-gray-300"
  }`;
  const iconContainerClasses =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-[#001f3f] dark:text-[#D4AF37]";

  return (
    <div className="flex items-center gap-4 py-4">
      {/* Icon */}
      <div className={iconContainerClasses}>
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <p className="text-base font-medium text-gray-900 dark:text-white">
          {title}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

      {/* Toggle Switch */}
      <div className="shrink-0">
        <label className={toggleContainerClasses}>
          <div
            className={knobClasses}
            style={{
              boxShadow: isEssential
                ? "rgba(0, 0, 0, 0.1) 0px 2px 4px"
                : "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
            }}
          ></div>
          <input
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            type="checkbox"
            className="invisible absolute"
          />
        </label>
      </div>
    </div>
  );
}
// --- End of CookieRow Component ---

export default function CookiePreferencesPage() {
  const [prefs, setPrefs] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPrefs(JSON.parse(stored));
    }
  }, []);

  const toggle = (key) => {
    if (key === "essential") return;
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const savePreferences = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    console.log("Preferences saved:", prefs);
    setShowModal(false);
  };

  const acceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    setPrefs(all);
    console.log("All cookies accepted:", all);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold dark:text-white mb-4">
          Cookie Preferences Saved.
        </h2>
        <Link
          href="/"
          className="text-[#001f3f] dark:text-[#D4AF37] underline hover:no-underline"
        >
          Go to Home Page
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Manage Your Cookie Preferences - Q Homes</title>
      </Head>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="relative z-50 flex w-full max-w-2xl flex-col rounded-xl bg-[#FFFFF0] shadow-2xl dark:bg-[#202932]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-[#001f3f] dark:text-white">
              Manage Your Cookie Preferences
            </h1>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Body with Content */}
          <div className="flex flex-col gap-6 p-6">
            <p className="text-base text-gray-700 dark:text-gray-300">
              We use cookies to enhance your browsing experience...
              <Link
                href="/privacy-policy"
                className="text-[#001f3f] dark:text-[#D4AF37] underline hover:no-underline font-medium ml-1"
              >
                Read our Privacy Policy.
              </Link>
            </p>

            {/* Cookie Category List */}
            <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
              <CookieRow
                icon="lock"
                title="Essential Cookies"
                description="These cookies are necessary for the website to function and cannot be switched off. They are always active."
                checked={true}
                disabled
              />

              <CookieRow
                icon="bar_chart"
                title="Analytics Cookies"
                description="These cookies allow us to count visits and traffic sources to measure and improve the performance of our site."
                checked={prefs.analytics}
                onChange={() => toggle("analytics")}
              />

              <CookieRow
                icon="campaign"
                title="Marketing Cookies"
                description="These cookies are used to build a profile of your interests and show you relevant adverts and property recommendations."
                checked={prefs.marketing}
                onChange={() => toggle("marketing")}
              />
            </div>
          </div>

          {/* Footer / Button Group */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-3 rounded-b-xl bg-gray-50 p-6 dark:bg-[#111921]">
            <button
              onClick={acceptAll}
              className="w-full sm:w-auto rounded-lg bg-[#001f3f] px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-opacity-90 dark:bg-[#D4AF37] dark:text-[#001f3f] dark:hover:bg-opacity-90"
            >
              Accept All
            </button>
            <button
              onClick={savePreferences}
              className="w-full sm:w-auto rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
