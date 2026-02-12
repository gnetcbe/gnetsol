import { NextRequest, NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

// ✅ Wrap with NextAuth middleware so auth checks still apply
export default withAuth(
  function middleware(request: NextRequest) {
    // If someone visits /home, redirect them to /
    if (request.nextUrl.pathname === '/home') {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Otherwise, continue normally
    return NextResponse.next()
  }
)

// ✅ Configure matcher to apply only on /home (not /)
export const config = {
  matcher: ['/home'],
}
