interface ProductCardProps {
  title: string;
  description: string;
}

export default function ProductCard({ title, description }: ProductCardProps) {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="2xl:text-6xl xl:text-4xl font-bold text-primary mb-6 cursor-default select-none">
          {`${title}`}
        </h1>
        <span className="w-[40%] uppercase 2xl:text-4xl xl:text-2xl font-bold text-center mb-10 cursor-default select-none">
          {description}
        </span>
      </section>
    </>
  );
}
