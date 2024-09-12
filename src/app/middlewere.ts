// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
  },
});

export const config = { matcher: ["/dashboard", "/profile"] }; // Define routes that should be protected
