import React from "react";
interface StatItem {
  id: number;
  value: string;
  label: string;
}

const Rhythm: React.FC = () => {
 
  const stats: StatItem[] = [
    {
      id: 1,
      value: "50k+",
      label: "HAPPY CUSTOMERS",
    },
    {
      id: 2,
      value: "120+",
      label: "FOOD VARIETIES",
    },
    {
      id: 3,
      value: "1M+",
      label: "ORDERS COMPLETED",
    },
  ];

  return (
    <section className="w-full bg-[#A64B16] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center justify-center text-center">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center justify-center space-y-2 py-4
                            ${
                              
                              index !== stats.length - 1
                                ? "md:border-r md:border-white/20"
                                : ""
                            }
                        `}
          >
            <span className="text-4xl md:text-5xl font-bold tracking-tight">
              {stat.value}
            </span>

            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-orange-100/80">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rhythm;
