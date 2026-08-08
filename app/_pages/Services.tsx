import WavingEmoji from "../_Components/WavingEmoji";
import { ServicesCard } from "../_Components/ServiceCard";

export function Services() {
  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col justify-between p-6 md:p-12 relative overflow-hidden font-nohemi-regular">
      <div className="md:hidden w-full flex flex-col items-start gap-4 py-6 hero-fade">
        <div className="">
          <p className="text-[8rem] flex items-center gap-1 leading-25 font-black tracking-tight">
            Mes
            <br /> Services
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </div>
  );
}
