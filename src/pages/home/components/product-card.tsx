import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProductCard({
  title,
  description,
  link,
}: ProductCardProps) {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        <h1 className="2xl:text-6xl xl:text-4xl xs:text-2xl font-bold text-primary 2xl:mb-6 xs:mb-2 cursor-default select-none text-center">
          {`${title}`}
        </h1>
        <span className="w-full xl:w-[40%] uppercase 2xl:text-4xl xl:text-2xl xs:text-xs font-bold text-center 2xl:mb-10 xs:mb-4 cursor-default select-none">
          {description}
        </span>
        <Link to={link}>
          <Button className="w-[130px] xs:h-[30px] xs:text-xs uppercase">
            View more
          </Button>
        </Link>
      </section>
    </>
  );
}
