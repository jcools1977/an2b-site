import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Sanity check the envs are present at runtime
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      setError('Missing Supabase environment variables.');
      return;
    }

    try {
      setLoading(true);

      // Basic validation
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        throw new Error('Please enter a valid email.');
      }

      const { error: insertError } = await supabase
        .from('waitlist')
        .insert({ email });

      if (insertError) throw insertError;

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 text-center">
      {submitted ? (
        <p className="text-green-400 text-lg font-medium">
          ✅ You’re on the waitlist. Thank you!
        </p>
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
            disabled={loading}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 disabled:opacity-60"
          >
            {loading ? 'Submitting…' : 'Join the Waitlist'}
          </button>
        </form>
      )}
      {error && <p className="text-red-400 mt-2">{error}</p>}
    </div>
  );
};

export default WaitlistForm;
