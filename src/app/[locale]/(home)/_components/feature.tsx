import Image from "next/image";

interface FeatureProps {
  src: Parameters<typeof Image>[0]["src"];
  title: string;
  description: string;
}

export default function Feature({ src, title, description }: FeatureProps) {
  return (
    <article className="relative w-full max-w-4xl h-[270px] rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-accent/20">
      <div className="absolute -z-10 inset-0 will-change-transform transition-transform duration-300 group-hover:scale-105">
        <Image
          src={src}
          alt={title}
          fill={true}
          className="w-full h-full object-cover transition-all duration-300 brightness-75 group-hover:brightness-125 group-hover:saturate-150 group-active:saturate-200"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>
      <div className="flex flex-col justify-end h-full p-6 pointer-events-none">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-lg text-white">{description}</p>
      </div>
    </article>
  );
}
