'use client';
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import {GiClapperboard, GiSmartphone, GiTreasureMap, GiPalette,} from "react-icons/gi";
import {FaFileCode, FaPen, FaMusic} from 'react-icons/fa';
import Link from "next/link";
import { Separator } from "./ui/separator";

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
      cover: "",
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
      cover: "",
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
      subtitle: "programmer",
      cover: "/team/yudha.jpg",
    },
    {
      role: [FaPen, FaMusic],
      title: "Zaidan",
      subtitle: "Writter & Music",
      cover: "/team/zaidan.jpg",
    },
  ]

  return (
    <div className='text-center'>
    <h1 className='pb-4 font-bold tracking-tight text-5xl lg:text-6xl'>Our Team</h1>
    <div className='flex items-center justify-center'>
        <Separator className='mt-3 bg-slate-100/20 h-0.5 w-40'/>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {teams.map((team, index) => {
          return (
              <div className="rounded-md">
                <DirectionAwareHover imageUrl={team.cover} className="w-full space-y-5 cursor-pointer rounded-md">
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{team.title}</h1>
                    <h2 className="text-2xl font-semibold">{team.subtitle}</h2>
                    <div className="flex items-center gap-5">
                      {team.role.map((Icon, index)=>{
                        return <Icon className="w-8 h-8" key={index}/>
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
          );
        })}
      </div>
</div>
  )
}

export default Member