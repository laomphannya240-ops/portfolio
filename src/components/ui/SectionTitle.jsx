export default function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="text-center mb-12 animate-fade-in">
      {subtitle && (
        <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
    </div>
  );
}