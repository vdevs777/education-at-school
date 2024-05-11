import { ChartCard } from "@/components/chart-card";
import {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question10,
} from "@/data/data";
import { CornerRightUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

export default function Students() {
  const [variantBreakpoint, setVariantBreakpoint] = useState(false)
  const { width } = useWindowSize();
  const breakpoint = width < 640;

  useEffect(() => {
    setVariantBreakpoint(breakpoint)
  }, [])

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-slate-300 font-bold text-2xl">Alunos</h1>
        <div className="flex flex-row gap-5 justify-center items-center">
          <a
            href="/teachers"
            className="cursor-pointer text-blue-600 hover:text-blue-400 text-xs sm:text-sm flex flex-row"
          >
            Professores
            <CornerRightUp size={variantBreakpoint ? 16 : 22} />
          </a>
          <a
            href="/"
            className="cursor-pointer text-blue-600 hover:text-blue-400 text-xs sm:text-sm flex flex-row items-center"
          >
            Introdução <CornerRightUp size={variantBreakpoint ? 16 : 22} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mt-4">
        <ChartCard
          array={question1}
          question="Você já presenciou alguma falta de educação com o professor?"
        />
        <ChartCard
          array={question2}
          question="Em sua opinião, você atrapalha as aulas?"
        />
        <ChartCard
          array={question3}
          question="Você já vandalizou alguma coisa da escola?"
        />
        <ChartCard
          array={question4}
          question="Você concorda com as atitudes de seus colegas dentro da escola?"
        />
        <ChartCard
          array={question5}
          question="Você entrega suas atividades e trabalhos em dia?"
        />
        <ChartCard
          array={question6}
          question="Você se considera um bom aluno (em geral)?"
        />
        <ChartCard
          array={question7}
          question="Você notou o quanto os professores estão exaustos com o comportamento dos alunos dentro da sala de aula?"
        />
        <ChartCard
          array={question8}
          question="Você se sente confortável com o comportamento de seus colegas?"
        />
        <ChartCard
          array={question10}
          question="Você está se adaptando bem ao novo ensino médio?"
        />
      </div>
    </>
  );
}
