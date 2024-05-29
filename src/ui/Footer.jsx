import { FaRegKeyboard } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiReactrouter, SiReactquery } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandVite, TbBrandSupabase, TbBrandRedux } from "react-icons/tb";
import FooterIcon from "./FooterIcon";
function Footer() {
  return (
    <footer className="flex justify-center col-span-2 border-zinc-300 border-solid border-t-2">
      <p className="flex items-center gap-3 select-none">
        <FaRegKeyboard />
        <span className="font-secondary text-xl">Thomas Johannessen 2024</span>
        <FooterIcon text="React v18">
          <IoLogoReact className="hover:scale-125" />
        </FooterIcon>
        <FooterIcon text="React Router v6.4">
          <SiReactrouter className="hover:scale-125" />
        </FooterIcon>
        <FooterIcon text="Tanstack Query v5">
          <SiReactquery className="hover:scale-125" />
        </FooterIcon>
        <FooterIcon text="Tailwind CSS v3.4.3">
          <BiLogoTailwindCss className="hover:scale-125" />
        </FooterIcon>
        <FooterIcon text="Vite v5.2.7">
          <TbBrandVite className="hover:scale-125" />
        </FooterIcon>
        <FooterIcon text="Supabase">
          <TbBrandSupabase className="hover:scale-125" />
        </FooterIcon>
        <FooterIcon text="Redux Toolkit">
          <TbBrandRedux className="hover:scale-125" />
        </FooterIcon>
      </p>
    </footer>
  );
}

export default Footer;
