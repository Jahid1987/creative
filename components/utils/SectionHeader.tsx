type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 max-w-2xl ${alignmentClass} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}