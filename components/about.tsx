import Link from "next/link";
import { Separator } from "./ui/separator";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">
        About Us
      </h1>
      <div className="flex mb-10 items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <div>
        <img src="about.png" alt="" />
      </div>
      <p className="mt-8 text-lg text-white font-medium">
        Studio Game SMK Muhammadiyah 1 Sukoharjo Established in 1992,<br /> Stratford
        Accounting is a full-service firm, offering affordable accounting
        solutions to individuals and local and international businesses
      </p>
      <div className="flex flex-col items-center max-w-xs gap-4 sm:justify-center sm:flex-row sm:inline-flex mt-5">
          <Link href="/" className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group" >Learn More {""}
          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"/>
          </Link>
         
        </div>
    </div>
  );
};

export default About;
