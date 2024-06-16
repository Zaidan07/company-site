"use client";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import {
  GiClapperboard,
  GiSmartphone,
  GiTreasureMap,
  GiPalette,
} from "react-icons/gi";
import { FaFileCode, FaPen, FaMusic } from "react-icons/fa";
import { Separator } from "./ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Member = () => {
  const teams = [
    {
      role: [GiClapperboard],
      title: "Alfarez",
      subtitle: "Director",
      cover: "/team/alfarez.jpg",
    },
    {
      role: [GiSmartphone],
      title: "Abby",
      subtitle: "",
      cover: "/team/abby.jpg",
    },
    {
      role: [GiTreasureMap],
      title: "Arifin",
      subtitle: "Level Design",
      cover: "/team/arifin.jpg",
    },
    {
      role: [GiPalette],
      title: "Bagas",
      subtitle: "2D Artist",
      cover: "/team/bagas.jpg",
    },
    {
      role: [GiPalette],
      title: "Aisyah",
      subtitle: "2D Artist",
      cover: "/team/aisyah.jpg",
    },
    {
      role: [FaFileCode],
      title: "Bastiar",
      subtitle: "Programmer",
      cover: "/team/bastiar.jpg",
    },
    {
      role: [FaFileCode],
      title: "Yudha",
      subtitle: "Programmer",
      cover: "/team/yudha.jpg",
    },
    {
      role: [FaPen, FaMusic],
      title: "Zaidan",
      subtitle: "Writer & Music",
      cover: "/team/zaidan.jpg",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">
        Our Team
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <div className="grid grid-cols-3 pt-20 gap-6 items-center justify-center">
        {teams.map((team, teamIndex) => {
          return (
            <Card className="w-full max-w-sm border-none rounded-md">
              <div>
                <img src={team.cover} alt="" className="w-full space-y-5 cursor-pointer" />
                <div>
                  <h1 className="">{team.title}</h1>
                  <h3 className="">{team.subtitle}</h3>
                  <div>
                    {team.role.map((Icon, roleindex)=>{
                      return <Icon className="w-4 h-4" key={roleindex}/>
                    })}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Member;
