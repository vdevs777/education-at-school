import { ReactNode } from "react";
import { Sidebar } from "./sidebar/sidebar";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="font-inter font-normal bg-slate-950 min-h-[98.4vh] p-8 flex flex-row">
        <Sidebar />
        <div className="flex-grow px-5 md:px-12 bg-slate-950">{children}</div>
      </div>
      <footer className="flex items-center justify-center bg-slate-900 text-slate-300 text-xs h-[2.4vh]">
        © 2024 - João V. S. Cunha&nbsp;
        <a
          href="https://github.com/vdevs777"
          className="cursor-pointer text-blue-600 hover:text-blue-400 text-xs"
        >
          (vdevs777)
        </a>
      </footer>
    </>
  );
}
