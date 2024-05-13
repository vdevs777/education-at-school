import { useEffect, useState } from "react";
import { CornerRightUp } from "lucide-react";
import { useWindowSize } from "react-use";

type Link = {
  text: string; 
  redirectTo: string
}

type PageHeaderProps = {
  title: string;
  links: Link[]
};

export function PageHeader({ title, links }: PageHeaderProps) {
  const [variantBreakpoint, setVariantBreakpoint] = useState(false);
  const { width } = useWindowSize();
  const breakpoint = width < 640;

  useEffect(() => {
    setVariantBreakpoint(breakpoint);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-slate-300 font-bold">{title}</h1>
      <div className="flex flex-row gap-5 justify-center items-center">
       {links.map((link) => (
         <a
         href={link.redirectTo}
         className="cursor-pointer text-blue-600 hover:text-blue-400 text-xs sm:text-sm flex flex-row"
       >
         {link.text}
         <CornerRightUp size={variantBreakpoint ? 16 : 22} />
       </a>
       ))}
       
      </div>
    </div>
  );
}
