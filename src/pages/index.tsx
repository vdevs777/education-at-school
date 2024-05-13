import { CornerRightUp } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="max-w-[50rem] flex flex-col gap-2">
        <h1 className="text-slate-300 font-bold text-2xl">
          Pesquisa survey: Educação na Escola
        </h1>
        <p className="text-slate-300 text-justify">
          A educação vai além das salas de aula e dos currículos acadêmicos; ela
          abrange também a formação de pessoas responsáveis e éticas. Dentro do
          ambiente escolar, a educação dos alunos desempenha um papel crucial na
          criação de uma comunidade saudável e respeitosa. Este trabalho se
          propõe a explorar a importância da educação dos alunos nas escolas,
          destacando a necessidade de cultivar valores como o respeito, a
          responsabilidade e a colaboração. Desde o simples ato de manter a sala
          de aula limpa até o respeito pelos professores e funcionários, cada
          comportamento dos alunos contribui para a construção de um ambiente
          propício ao aprendizado e ao desenvolvimento pessoal. Ao examinar como
          a educação dos alunos pode promover uma cultura escolar positiva e
          inclusiva. A formação dos estudantes vai além do domínio de conteúdos
          acadêmicos e se estende ao desenvolvimento de habilidades sociais e
          atitudes responsáveis. Nessa pesquisa foram entrevistados 29 alunos da
          turma do 2º ano REG 2 e 14 professores (incluindo professores-apoio).
        </p>
        <div className="flex flex-col items-center">
          <div className="mt-5">
            <a
              href="/students"
              className="cursor-pointer text-blue-600 hover:text-blue-400 text-sm flex flex-row"
            >
              Pesquisa com os estudantes <CornerRightUp />
            </a>
          </div>
          <a
            href="/teachers"
            className="cursor-pointer text-blue-600 hover:text-blue-400 text-sm flex flex-row"
          >
            Pesquisa com os professores <CornerRightUp />
          </a>
        </div>
      </div>
    </div>
  );
}
