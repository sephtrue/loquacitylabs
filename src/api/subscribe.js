export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTI0OWNhYmJiMDlmMWExYjE1OWUwNWM1MWE3NWQ3NWEyYmFkYzNmZDI1Y2I4ZDQ3OGM5MjhhYTVlNzkwNTAzYzY5YmMyY2Q3YjE0MWM1OGUiLCJpYXQiOjE3NzUwMDgzNTQuNTI3NTMyLCJuYmYiOjE3NzUwMDgzNTQuNTI3NTM1LCJleHAiOjQ5MzA2ODE5NTQuNTIxMjAzLCJzdWIiOiIyMjI4MzQ5Iiwic2NvcGVzIjpbXX0.YIeUcYG_chTeKwvplE1j1GuqNVUyyY_bz7PGz-KfDbdjP5g5BW5Mvwl1B2mdEYz9VTNWCdv7Ldq-AAb7zM9v_N_juyCyozA4Ttsdyh1VlS2jAB_8npLdOZeyzJXsZP9iV6ddoqUuR95kYX_-poQXaf93eXEabog33OVb4XYY2rHF8i5EadU9Z5nvio89zoY7EHqV552zSmf5k997MWm1CZqKf2MTYJqTDPntFnPk-m2CQ95iouF7f1Juzya9DlPua5FQjsmneySFwt2FdBPhv-Nb_brh3VWqrNpGEhE9T08YPyNn4x1SghswKnFQtigKgS-1YqGCH96pV20uw3tBTprQKxBfjozJOL2YjC74WIK9zqJtMrCU17AnZuRETFQwsufqCRpjv68cnC4IzOWVcD9OoV2lEiQcrDrrLpIyjc4Dfv01UOl_v_LVJibZ1e2UGO2N0i1PajDKHJ12GMGuoujl8pxLaQhdtYSFGWbAbycOdK0VS7LzmGXkZ6gStwGVMcCW0ic6eqhk-ngUcSiRr9Wgvmbtnx3ABluAIe70SR7Xgl6ncdZRA2p-EIwEvuRpNmp5WH3-nCmBTq2hS0Jqa9kq2BnT3Y4oqnDab1DHKEnnwsjIl6wBapFEtLyKmzIRqujsxzysANMo2o1T5FyvQecMlwRIEl94ow54miKUtIw`,
    },
    body: JSON.stringify({
      email,
      groups: ['W1t7Im9wZXJhdG9yIjoiaW5fYW55IiwiY29uZGl0aW9uIjoiZ3JvdXBzIiwiYXJncyI6WyJncm91cHMiLFsiMTgzNTA5NjQxNDUzMzcyODg4Il1dfV1d&group=183509641453372888'],
    }),
  });

  const data = await response.json();
  if (response.ok) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(400).json({ error: data });
  }
}