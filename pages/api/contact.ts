import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Next handler.
 *
 * @param req
 * @param res
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = JSON.parse(req.body)

  if (!email || !name || !message) {
    return res.status(400).json({ error: 'Missing Fields' })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowd' })
  }

  const request = await fetch(
    'https://api.airtable.com/v0/appOxK6vziv9vFDcw/submissions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          email,
          name,
          message,
        },
      }),
    }
  )

  if (request.ok) {
    return res.status(200).json({ data: 'ok' })
  }

  return res.status(400).json({ error: 'error returned' })
}

export default handler
