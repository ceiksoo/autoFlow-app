
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pin } = req.body;
  try {
    const result = await axios.post('https://your-n8n-domain/webhook/logowanie', { pin });
    res.status(200).json({ userID: result.data.userID });
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}
