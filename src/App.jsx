import WaitlistForm from "./components/WaitlistForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* HERO SECTION (uses direct <img> instead of CSS background) */}
      <section className="px-6 pt-32 pb-20 text-center max-w-5xl mx-auto">
        <div className="relative rounded-xl shadow-xl overflow-hidden">
          <img
            src="/logos/hero_image_new.png"
            alt="AN2B Hero"
            className="w-full object-cover rounded-xl"
            style={{ maxHeight: "80vh" }}
          />
        </div>
      </section>

      {/* LEARN MORE SECTION */}
      <section
        id="learn"
        className="px-6 py-32 text-center max-w-3xl mx-auto bg-[#111827] rounded-xl"
      >
        <h2 className="text-3xl font-semibold mb-6">Learn More About AN2B</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          AN2B is reimagining B2B commerce. For too long, procurement has been
          slow, confusing, and controlled by a few giants. AN2B makes buying and
          selling between businesses as effortless as shopping online. Whether
          you’re a supplier or a buyer, AN2B helps you connect, compare, and
          transact faster than ever. It’s the future of business-to-business —
          simple, smart, and built for growth.
        </p>
      </section>

      {/* SPACER */}
      <div className="h-24" />

      {/* WAITLIST SECTION */}
      <section
        id="waitlist"
        className="px-6 py-24 bg-[#0f172a] text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">The Future of B2B Starts Here.</h2>
        <p className="text-gray-300 mb-8">
          Be among the first to deploy AN2B in your industry. Suppliers,
          distributors, and investors welcome.
        </p>
        <WaitlistForm />
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10 text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img
            src="/logos/favicon_32x32.png"
            alt="AN2B icon"
            className="w-5 h-5"
          />
          <span>AN2B © 2025 · The AI Operating System for B2B Commerce</span>
        </div>
      </footer>
    </main>
  );
}
