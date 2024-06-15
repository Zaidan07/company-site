'use client';
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import {GiClapperboard, GiSmartphone, GiTreasureMap, GiPalette} from "react-icons/gi";
import {FaFileCode, FaPen, FaMusic} from 'react-icons/fa';
import { Separator } from "./ui/separator";

const Member = () => {

  const teams = [
    {
      role: [GiClapperboard],
      title: "Alfarez",
      subtitle: "Director",
      cover: "/team/alfarez.jpg",
      background: "bg-slate-300 "
    },
    {
      role: [GiSmartphone],
      title: "Abby",
      subtitle: "",
      cover: "/team/abby.jpg",
      background: "bg-slate-300"
    },
    {
      role: [GiTreasureMap],
      title: "Arifin",
      subtitle: "Level Design",
      cover: "",
      background: "bg-slate-300"
    },
    {
      role: [GiPalette],
      title: "Bagas",
      subtitle: "2D Artist",
      cover: "/team/bagas.jpg",
      background: "bg-slate-300"
    },
    {
      role: [GiPalette],
      title: "Aisyah",
      subtitle: "2D Artist",
      cover: "",
      background: "bg-slate-300"
    },
    {
      role: [FaFileCode],
      title: "Bastiar",
      subtitle: "Programmer",
      cover: "/team/bastiar.jpg",
      background: "bg-slate-300"
    },
    {
      role: [FaFileCode],
      title: "Yudha",
      subtitle: "Programmer",
      cover: "/team/yudha.jpg",
      background: "bg-slate-300"
    },
    {
      role: [FaPen, FaMusic],
      title: "Zaidan",
      subtitle: "Writer & Music",
      cover: "/team/zaidan.jpg",
      background: "bg-slate-300"  
    },
  ];

  return (
    <div className='text-center'>
      <h1 className='pb-4 font-bold tracking-tight text-5xl lg:text-6xl'>Our Team</h1>
      <div className='flex items-center justify-center'>
        <Separator className='mt-3 bg-slate-100/20 h-0.5 w-40'/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {teams.map((team, teamIndex) => {
          return (
            <div key={teamIndex}>
              <DirectionAwareHover imageUrl={team.cover} className="w-full space-y-5 cursor-pointer">
                <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{team.title}</h1>
                  <h2 className="text-xl font-semibold">{team.subtitle}</h2>
                  <div className="flex items-center gap-5">
                    {team.role.map((Icon, roleIndex) => {
                      return <Icon className="w-4 h-4" key={roleIndex} />
                    })}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Member;
