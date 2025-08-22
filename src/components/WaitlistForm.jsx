import { useState } from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to join waitlist.');

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      {submitted ? (
        <p className="text-green-400 text-lg font-medium">✅ You're on the waitlist!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="you@company.com"
            className="px-4 py-3 rounded-md text-black"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Join the Waitlist
          </button>
        </form>
      )}
      {error && <p className="text-red-400 mt-2">{error}</p>}
    </div>
  );
};

export default WaitlistForm;
