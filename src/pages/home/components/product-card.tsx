interface ProductCardProps {
  title: string;
  description: string;
}

export default function ProductCard({ title, description }: ProductCardProps) {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        <h1 className="2xl:text-6xl xl:text-4xl xs:text-2xl font-bold text-primary mb-6 cursor-default select-none text-center">
          {`${title}`}
        </h1>
        <span className="w-full xl:w-[40%] uppercase 2xl:text-4xl xl:text-2xl xs:text-sm font-bold text-center mb-10 cursor-default select-none">
          {description}
        </span>
      </section>
    </>
  );
}
