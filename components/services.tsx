"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, PieChart, TrendingUp, Wallet, Building2 } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: PieChart,
    title: "Wealth Management",
    description: "Personalized portfolio management with automated rebalancing and tax optimization strategies.",
    features: ["Custom portfolios", "Tax-loss harvesting", "Quarterly reviews"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=800&fit=crop&q=80",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert guidance from certified financial advisors to help you make informed investment decisions.",
    features: ["1-on-1 consultations", "Market insights", "Risk assessment"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=800&fit=crop&q=80",
  },
  {
    icon: Wallet,
    title: "Retirement Planning",
    description: "Comprehensive retirement solutions including 401(k), IRA, and pension plan management.",
    features: ["Goal planning", "Contribution optimization", "Distribution strategies"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop&q=80",
  },
  {
    icon: Building2,
    title: "Corporate Solutions",
    description:
      "Enterprise-grade financial services for businesses, including treasury management and employee benefits.",
    features: ["Treasury services", "Benefits administration", "Payroll integration"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80",
  },
]

export function Services() {
  const handleLearnMore = (title: string) => {
    console.log(`[v0] Learn more clicked for: ${title}`)
    // You can add router.push here for actual navigation
  }

  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {"Comprehensive Financial Services"}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Everything you need to build and protect your wealth in one place"}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="border-border/50 bg-card transition-all hover:border-accent/50 hover:shadow-lg overflow-hidden group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="gap-2 text-accent hover:text-accent"
                    onClick={() => handleLearnMore(service.title)}
                  >
                    {"Learn More"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
