type Stat = { value: string; label: string }

export default function InfoStatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 text-center">
          <p className="text-[#C8973A] text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            {stat.value}
          </p>
          <p className="text-[#5C5247] text-xs mt-3 leading-snug">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
