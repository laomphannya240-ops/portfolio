export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
      {subtitle && (
        <span className="inline-block text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      
      {/* បន្ទាត់ពណ៌ស្វាយតូចនៅខាងក្រោមចំណងជើង */}
      <div className="w-12 h-[2px] bg-indigo-500 mt-2 rounded-full" />
    </div>
  );
}