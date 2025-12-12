"use client"

import Image from "next/image"

export function Stats() {
  const stats = [
    { label: "Assets Under Management", value: "$50B+" },
    { label: "Active Investors", value: "250K+" },
    { label: "Countries Served", value: "45+" },
    { label: "Average Returns", value: "12.5%" },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=2000&h=800&fit=crop&q=80"
          alt="Financial Growth Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wide text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
