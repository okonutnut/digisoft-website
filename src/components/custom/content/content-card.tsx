interface ContentCardProps {
  title?: string;
  id?: string;
  children?: React.ReactNode;
}

export default function ContentCard({ title, id, children }: ContentCardProps) {
  return (
    <div id={id}>
      {title && <h2 className="text-lg font-bold text-primary">{title}</h2>}
      {children}
    </div>
  );
}
