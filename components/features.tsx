import { Shield, Zap, BarChart3, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const features = [
  {
    icon: Zap,
    title: "Instant Execution",
    description:
      "Execute trades and transfers in real-time with our high-performance infrastructure built for speed and reliability.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Bank-grade encryption and multi-factor authentication protect your assets with institutional-level security protocols.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Gain actionable insights with real-time portfolio analytics, risk assessment, and performance tracking tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description:
      "Fully compliant with SEC, FINRA, and international financial regulations to ensure your peace of mind.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {"Built for the Modern Investor"}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Our platform combines cutting-edge technology with decades of financial expertise"}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="border-border/50 bg-card transition-all hover:border-accent/50 hover:shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
