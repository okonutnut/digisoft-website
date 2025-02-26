interface ContentCardProps {
  title: string;
  subtitle?: string;
}

export default function ContentHeader({ title, subtitle }: ContentCardProps) {
  return (
    <div>
      <h1 className="text-4xl mb-3 font-bold text-primary">{title}</h1>
      {subtitle && <p className="text-md text-gray-600">{subtitle}</p>}
    </div>
  );
}
