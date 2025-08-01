import Image from "next/image";
import { auth, signIn } from "../../auth";

export default async function Navbar() {
  const session = await auth();
  const userSession = session?.user;
  return (
    <form className="flex justify-between pt-2 h-full">
      <p
        className="text-4xl font-bold bg-clip-text"
        style={{
          background:
            "linear-gradient(to right, orange 30%, rgba(170, 169, 173, 0.5))",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Welcome, {userSession?.name?.slice(0, userSession.name.indexOf(" "))}
      </p>
      <button
        className="border h-12 w-12 rounded-full relative overflow-clip"
        formAction={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Image
          fill
          src={userSession?.image ? userSession?.image : "/"}
          alt="DP"
        />
      </button>
    </form>
  );
}
