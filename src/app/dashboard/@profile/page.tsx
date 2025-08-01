import { Card } from "@/components/Card";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <Card className="overflow-hidden p-0! flex flex-col-reverse">
      <div
        className="flex items-end justify-between relative z-10 text-white p-5 backdrop-blur-[8px] h-full bg-[rgba(255,255,255,0.3)]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 10%, black 60%, black 100%)",
        }}
      >
        <div>
          <p className="font-semibold">Lora Piterson</p>
          <p className="text-[10px]">UI/UX Designer</p>
        </div>
        <div>
          <button className="text-sm border-[1.8px] px-4 py-[6px] rounded-full">
            $1,200
          </button>
        </div>
      </div>

      <div className="h-full w-full">
        <Image
          fill
          src="/profile-picture.jpg"
          alt="Profile Picture"
          className="object-cover"
        />
      </div>
    </Card>
  );
}
