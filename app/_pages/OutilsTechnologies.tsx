import Profil from "@/app/Icon.svg";
import Image from "next/image";
export function OutilsTechnologies() {
  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col justify-between p-6 md:p-12 relative overflow-hidden font-nohemi-regular">
      <div className="md:hidden w-full flex flex-col items-start gap-4 py-6 hero-fade">
        <div className="">
          <p className="text-[6rem] flex items-center gap-1 leading-25 font-black tracking-tight">
            Mes
            <br /> Outils &<br /> Technologies
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="avatar">
            <div className="ring-blue-50 ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <Image src={Profil} alt="Profil" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
