import { auth } from "../../auth";
import { LoginButton } from "./NavbarComps";
import { SessionProvider } from "next-auth/react";

export default async function Navbar() {
  const session = await auth();
  const userSession = session?.user;
  return (
    <form className="flex justify-between pt-2 h-full max-w-[1300px] mx-auto">
      <p
        className="text-4xl font-bold bg-clip-text"
        style={{
          background:
            "linear-gradient(to right, orange 30%, rgba(170, 169, 173, 0.5))",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Welcome,{" "}
        {userSession
          ? userSession?.name?.slice(0, userSession.name.indexOf(" "))
          : "Guest"}
      </p>
      <div className="relative">
        <SessionProvider>
          <LoginButton />
        </SessionProvider>
      </div>
    </form>
  );
}
