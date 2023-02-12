import { setCookie } from '@/utils/cookies'
import { NextApiResponse, NextApiRequest} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    setCookie(res, 'Next.js', 'api-middleware!')
    res.send(res.getHeader('Set-Cookie'))
}

