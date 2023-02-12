import type { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    console.log('middleware execute')
    // return new Response('Hello world!')
}