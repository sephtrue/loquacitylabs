import { useState } from 'react';
import logo from './loquacity.png';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        'https://connect.mailerlite.com/api/subscribers',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTI0OWNhYmJiMDlmMWExYjE1OWUwNWM1MWE3NWQ3NWEyYmFkYzNmZDI1Y2I4ZDQ3OGM5MjhhYTVlNzkwNTAzYzY5YmMyY2Q3YjE0MWM1OGUiLCJpYXQiOjE3NzUwMDgzNTQuNTI3NTMyLCJuYmYiOjE3NzUwMDgzNTQuNTI3NTM1LCJleHAiOjQ5MzA2ODE5NTQuNTIxMjAzLCJzdWIiOiIyMjI4MzQ5Iiwic2NvcGVzIjpbXX0.YIeUcYG_chTeKwvplE1j1GuqNVUyyY_bz7PGz-KfDbdjP5g5BW5Mvwl1B2mdEYz9VTNWCdv7Ldq-AAb7zM9v_N_juyCyozA4Ttsdyh1VlS2jAB_8npLdOZeyzJXsZP9iV6ddoqUuR95kYX_-poQXaf93eXEabog33OVb4XYY2rHF8i5EadU9Z5nvio89zoY7EHqV552zSmf5k997MWm1CZqKf2MTYJqTDPntFnPk-m2CQ95iouF7f1Juzya9DlPua5FQjsmneySFwt2FdBPhv-Nb_brh3VWqrNpGEhE9T08YPyNn4x1SghswKnFQtigKgS-1YqGCH96pV20uw3tBTprQKxBfjozJOL2YjC74WIK9zqJtMrCU17AnZuRETFQwsufqCRpjv68cnC4IzOWVcD9OoV2lEiQcrDrrLpIyjc4Dfv01UOl_v_LVJibZ1e2UGO2N0i1PajDKHJ12GMGuoujl8pxLaQhdtYSFGWbAbycOdK0VS7LzmGXkZ6gStwGVMcCW0ic6eqhk-ngUcSiRr9Wgvmbtnx3ABluAIe70SR7Xgl6ncdZRA2p-EIwEvuRpNmp5WH3-nCmBTq2hS0Jqa9kq2BnT3Y4oqnDab1DHKEnnwsjIl6wBapFEtLyKmzIRqujsxzysANMo2o1T5FyvQecMlwRIEl94ow54miKUtIw',
          },
          body: JSON.stringify({
            email: email,
            groups: ['W1t7Im9wZXJhdG9yIjoiaW5fYW55IiwiY29uZGl0aW9uIjoiZ3JvdXBzIiwiYXJncyI6WyJncm91cHMiLFsiMTgzNTA5NjQxNDUzMzcyODg4Il1dfV1d&group=183509641453372888'],
          }),
        }
      );
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
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