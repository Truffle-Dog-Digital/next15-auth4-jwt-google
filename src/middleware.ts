import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware() {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - / (homepage)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|$).*)',
  ],
} 