import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Button = ({ link, text }) => {
  return (
    <Link href={link}>
      <button className="group px-8 py-3 bg-transparent border border-orange-500 mt-10 text-white rounded-full font-semibold transition hover:bg-orange-600 flex gap-3 items-center cursor-pointer">
        {text}
        <span className="-rotate-45 duration-300 group-hover:rotate-0 transition-all">
          <ArrowRight />
        </span>
      </button>
    </Link>
  );
};

export default Button;
