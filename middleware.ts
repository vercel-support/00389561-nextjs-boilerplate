import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
	matcher:
		"/((?!api/|_next/|images/|_static/|assets/|_axiom/|_vercel|doc/|sitemap-doc.xml|[w-]+.(?!xml$)[w]+).*)",
};

export default function middleware(request: NextRequest) {
	return NextResponse.next();
}
