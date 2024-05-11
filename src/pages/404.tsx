import { CornerRightUp } from "lucide-react";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center flex-col h-auto p-0">
      <p className="text-slate-300 text-xl text-center">Ops!, essa página não existe!</p>
      <a
            href="/"
            className="cursor-pointer text-blue-600 hover:text-blue-400 text-xl font-semibold flex flex-row items-center"
          >
            Voltar ao início <CornerRightUp  />
          </a>
    </div>
  )
}