import { useState } from 'react';
import logo from './loquacity.png';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#ffffff', fontFamily: 'Inter, system-ui, sans-serif' }}>

      <nav style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={logo} alt="Loquacity Labs" style={{ width: '44px', height: '44px', borderRadius: '50%' }} />
          <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-0.5px' }}>
            <span style={{ color: '#3b82f6' }}>Loquacity</span> Labs
          </div>
        </div>
        <div style={{ fontSize: '13px', color: '#666', background: '#111', padding: '6px 14px', borderRadius: '20px', border: '1px solid #222' }}>
          Early access — April 30
        </div>
      </nav>

      <main style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 24px 60px' }}>

        <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: '500', color: '#3b82f6', background: 'rgba(59,130,246,0.1)', padding: '4px 12px', borderRadius: '20px', marginBottom: '24px', border: '1px solid rgba(59,130,246,0.2)' }}>
          AI-powered interview practice
        </div>

        <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-1.5px', marginBottom: '24px' }}>
          Stop bombing interviews<br />
          <span style={{ color: '#3b82f6' }}>you're qualified for.</span>
        </h1>

        <p style={{ fontSize: '18px', color: '#888', lineHeight: '1.7', marginBottom: '16px' }}>
          Loquacity Labs uses AI to conduct real mock interviews based on any job posting you upload. You speak your answers out loud. The AI pushes back, asks follow-ups, and delivers instant feedback on your answers, pace, tone, and confidence.
        </p>

        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.7', marginBottom: '48px' }}>
          Practice until the real thing feels easy.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: '1', minWidth: '260px', padding: '14px 20px', fontSize: '15px', background: '#111', border: '1px solid #2a2a2a', borderRadius: '10px', color: '#fff', outline: 'none' }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{ padding: '14px 28px', fontSize: '15px', fontWeight: '600', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                {loading ? 'Joining...' : 'Get early access'}
              </button>
            </div>
            <p style={{ fontSize: '12px', color: '#444', marginTop: '12px' }}>
              No spam. No pricing yet. Just first access when we launch April 30.
            </p>
          </form>
        ) : (
          <div style={{ marginBottom: '48px', padding: '24px', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '12px' }}>
            <p style={{ fontSize: '18px', fontWeight: '600', color: '#3b82f6', marginBottom: '8px' }}>You're on the list!</p>
            <p style={{ fontSize: '14px', color: '#888' }}>We'll email you at {email} when Loquacity Labs goes live on April 30.</p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '64px' }}>
          {[
            { title: 'Real verbal practice', desc: 'AI speaks questions out loud. You answer with your voice.' },
            { title: 'Instant feedback', desc: 'Detailed PDF report on every answer, tone, and pace.' },
            { title: 'Any job posting', desc: 'Upload any job description and get tailored questions.' },
          ].map((f, i) => (
            <div key={i} style={{ padding: '20px', background: '#111', border: '1px solid #1e1e1e', borderRadius: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', marginBottom: '12px' }}></div>
              <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#fff' }}>{f.title}</p>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: '#444' }}>© 2026 Loquacity Labs</p>
          <p style={{ fontSize: '13px', color: '#444' }}>loquacitylabs.com</p>
        </div>

      </main>
    </div>
  );
}