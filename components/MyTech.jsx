import { cn } from "@/lib/utils";
import clsx from 'clsx'; // Import clsx at the top of your file
import Marquee from "@/components/magicui/marquee";

const techStack = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png",
  },
  {
    name: "Next.js",
    description: "The React Framework for Production.",
    img: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for creating custom designs.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
  },
  {
    name: "Bootstrap",
    description: "An Open-source CSS framework for responsive frontend design.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
  },
  {
    name: "Node.js",
    description: "A cross-platform, open-source JavaScript runtime environment.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png",
  },
  {
    name: "Git",
    description: "A version control system that tracks versions of files.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
  },
  {
    name: "Express.js",
    description: "A web application backend framework for Node.js.",
    img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
  },
  {
    name: "Mongodb",
    description: "A cross-platform, document-oriented database program.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/768px-MongoDB_Logo.svg.png?20190626143224",
  },
  {
    name: "GSAP",
    description: "A powerful animation library for JavaScript.",
    img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
  {
    name: "Framer Motion",
    description: "A popular React animation library.",
    img: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  },
];

const firstRow = techStack.slice(0, techStack.length / 2);
const secondRow = techStack.slice(techStack.length / 2);

const TechCard = ({ img, name, description }) => {
  return (
    <figure
      className={clsx(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="h-14 py-2" alt={name} src={img} />
        <div className="flex flex-col text-center">
          <figcaption className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function MyTechs() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee className="[--duration:20s]">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
