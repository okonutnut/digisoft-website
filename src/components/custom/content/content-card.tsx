interface ContentCardProps {
  title?: string;
  children?: React.ReactNode;
}

export default function ContentCard({ title, children }: ContentCardProps) {
  return (
    <div>
      {title && <h2 className="text-lg font-bold text-primary">{title}</h2>}
      {children}
    </div>
  );
}
