module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        groups: ['183509641453372888'],
      }),
    });

    const data = await response.json();
    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: data });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};