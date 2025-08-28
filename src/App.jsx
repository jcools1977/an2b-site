import WaitlistForm from "./components/WaitlistForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 py-32 text-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <img
            src="/logos/an2b_logo_final_transparent.png"
            alt="AN2B Logo"
            className="w-24 h-24 mb-4"
          />
          <h1 className="text-4xl font-extrabold tracking-wide">AN2B</h1>
        </div>
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          From Any<br />to Business.
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          AN2B is the AI Operating System for B2B Commerce — connecting
          suppliers, buyers, and governments through intelligent procurement,
          instant quoting, and seamless fulfillment.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#waitlist"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold"
          >
            Join the Waitlist
          </a>
          <a
            href="#learn"
            className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Visual Hero (optional background image) */}
      <section className="text-center mb-24">
        <img
          src="/logos/hero_image_full.png"
          alt="AN2B Hero"
          className="mx-auto w-full max-w-3xl rounded-xl shadow-xl"
        />
      </section>

      {/* Learn More Section */}
      <section id="learn" className="px-6 py-24 text-center max-w-3xl mx-auto bg-[#111827] rounded-xl">
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

      {/* Waitlist Section */}
      <section id="waitlist" className="px-6 py-24 bg-[#0f172a] text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">The Future of B2B Starts Here.</h2>
        <p className="text-gray-300 mb-8">
          Be among the first to deploy AN2B in your industry. Suppliers,
          distributors, and investors welcome.
        </p>
        <WaitlistForm />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-10 text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src="/logos/favicon_32x32.png" alt="AN2B icon" className="w-5 h-5" />
          <span>AN2B © 2025 · The AI Operating System for B2B Commerce</span>
        </div>
      </footer>
    </main>
  );
}
