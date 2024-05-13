import { ChartCard } from "@/components/chart-card";
import { PageHeader } from "@/components/page-header";
import {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
} from "@/data/teachers-data";

export default function Teachers() {
  return (
    <>
      <PageHeader
        title="Professores"
        links={[
          { text: "Introdução", redirectTo: "/" },
          { text: "Alunos", redirectTo: "/students" },
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mt-4">
        <ChartCard
          array={question1}
          question="Você já se sentiu desrespeitado(a) por algum aluno?"
        />
        <ChartCard
          array={question2}
          question="Você está se adaptando bem ao novo ensino médio?"
        />
        <ChartCard
          array={question3}
          question="Você já pensou em desistir de lecionar (pedir demissão, pegar licença, mudar de profissão)?"
        />
        <ChartCard
          array={question4}
          question="Em sua opinião são justas as regras impostas pela escola (ex: dar 'segunda chance' aos alunos)?"
          observations="* ninguém respondeu 'sim'"
        />
        <ChartCard
          array={question5}
          question="Você está satisfeito com o comportamento dos alunos?"
        />
        <ChartCard
          array={question6}
          question="Você se sente confortável ministrando suas aulas no dia-a-dia?"
        />
        <ChartCard
          array={question7}
          question="Você sente que os pais valorizam seu trabalho como educador?"
        />
      </div>
    </>
  );
}
