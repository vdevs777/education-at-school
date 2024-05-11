import { MouseEventHandler, ReactNode } from "react";
import { useRouter } from "next/router";

type SidebarButtonProps = {
  text: string;
  icon: ReactNode;
  redirectTo: string;
};

export function SidebarButton({ text, icon, redirectTo }: SidebarButtonProps) {
  const router = useRouter();

  const handleRedirect: MouseEventHandler = (event) => {
    event.preventDefault();
    router.push(redirectTo);
  };

  const isSamePathname = router.pathname === redirectTo;

  return (
    <span
      className={`text-slate-400 hover:text-slate-50 ${
        isSamePathname && "text-slate-50"
      } flex flex-row gap-2 cursor-pointer transition-all`}
      onClick={handleRedirect}
    >
      {icon}
      {text}
    </span>
  );
}
