import { Card } from "@/components/Card";
import ModNumberInput from "@/components/ModNumberInput";
import { redirect } from "next/navigation";

export default function SetTimer() {
  return (
    <Card>
      <form
        className="h-full flex justify-center items-center relative"
        action={async (formData) => {
          "use server";
          const hours = Number(formData.getAll("hours").join(""));
          const mins = Number(formData.getAll("mins").join(""));
          const secs = Number(formData.getAll("secs").join(""));

          const hoursToSec = hours * 3600;
          const minsToSec = mins * 60;
          const totalSeconds = hoursToSec + minsToSec + secs;

          redirect(`/dashboard?ts=${totalSeconds}`);
        }}
      >
        <div className="flex justify-center gap-3">
          <div className="flex flex-col items-center">
            <div>Hrs</div>
            <div className="flex gap-1">
              <ModNumberInput name="hours" max={5} />
              <ModNumberInput name="hours" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>Mins</div>
            <div className="flex gap-1">
              <ModNumberInput name="mins" max={5} />
              <ModNumberInput name="mins" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>Secs</div>
            <div className="flex gap-1">
              <ModNumberInput name="secs" max={5} />
              <ModNumberInput name="secs" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end w-full absolute bottom-0 right-0">
          <input
            className="rounded-2xl px-5 py-1 bg-black font-semibold text-white"
            type="submit"
            value={"Okay"}
          />
        </div>
      </form>
    </Card>
  );
}
