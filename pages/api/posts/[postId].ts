import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { postId } = req.query
    res.end(`Post: ${postId}`)
}


  