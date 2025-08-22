// App.jsx (Full updated version with WaitlistForm included)

import WaitlistForm from "./components/WaitlistForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 py-32 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">From Any to Business.</h1>
        <p className="text-xl text-gray-300 mb-8">
          AN2B is the AI Operating System for B2B Commerce. Connecting suppliers, buyers, and governments through intelligent procurement, instant quoting, and seamless fulfillment.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Join the Waitlist</button>
          <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black">Learn More</button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-24 bg-[#111827] text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">The Maze of B2B Procurement</h2>
        <p className="text-gray-400 text-lg">
          Distributors struggle with outdated catalogs. Buyers can’t find or compare efficiently. Government and enterprise bids take weeks. Amazon dominates, leaving everyone else behind.
        </p>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">AN2B: The AI Infrastructure for B2B</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2">🧠 Procureon</h3>
            <p className="text-gray-300">The AI Procurement OS. Clean data. Smart onboarding. Pinecone search.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">💬 Quotiva</h3>
            <p className="text-gray-300">AI Quoting Assistant. Excel/PDF → Quote → Checkout.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">🔗 Marketplace Layer</h3>
            <p className="text-gray-300">Any Vendor. Any Vertical. One Interface.</p>
          </div>
        </div>
      </section>

      {/* Waitlist Section with Form */}
      <section className="px-6 py-24 bg-[#0f172a] text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">The Future of B2B Starts Here.</h2>
        <p className="text-gray-300 mb-8">Be among the first to deploy AN2B in your industry. Suppliers, distributors, and investors welcome.</p>

        <WaitlistForm />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-10 text-sm">
        AN2B © 2025 &middot; The AI Operating System for B2B Commerce
      </footer>
    </main>
  );
}
