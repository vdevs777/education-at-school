import { Backpack, CircleHelp, GraduationCap } from "lucide-react";
import { SidebarButton } from "./sidebar-button";

export function Sidebar() {
  return (
    <nav className="min-w-60 max-w-60 h-auto bg-slate-900 rounded-xl flex-col items-center pt-20 justify-between hidden lg:flex">
      <div className="flex flex-col gap-5">
        <h3 className="text-slate-300 text-lg font-bold ">
          Educação na escola
        </h3>
        <SidebarButton text="Introdução" icon={<CircleHelp />} redirectTo="/" />
        <SidebarButton
          text="Alunos"
          icon={<Backpack />}
          redirectTo="/students"
        />
        <SidebarButton
          text="Professores"
          icon={<GraduationCap />}
          redirectTo="/teachers"
        />
      </div>
      <span className="text-slate-500 text-xs m-5">
        Escola Estadual Frei Orlando
        <br /> 1º ano REG 2 <br /> Alunos: João Vítor, Arthur Eurico, Júlio,
        Danilo, Ana Clara, Sofia
      </span>
    </nav>
  );
}
