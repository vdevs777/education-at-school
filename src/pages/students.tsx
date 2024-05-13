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
  question8,
  question10,
} from "@/data/students-data";

export default function Students() {
  return (
    <>
      <PageHeader
        title="Alunos"
        links={[
          { text: "Introdução", redirectTo: "/" },
          { text: "Professores", redirectTo: "/teachers" },
        ]}
      />
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
          observations="* ninguém respondeu 'não sei'"
        />
      </div>
    </>
  );
}
