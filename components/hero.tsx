"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Award } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function Hero() {
  const router = useRouter()

  const handleGetStarted = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScheduleDemo = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            {/* Announcement Badge */}
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent-foreground border border-accent/20">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-medium">{"Trusted by $50B+ in assets under management"}</span>
              <ArrowRight className="h-4 w-4" />
            </div>

            {/* Main Heading */}
            <h1 className="text-balance font-sans text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {"Smart Financial Solutions for "}
              <span className="text-accent">{"Modern Wealth"}</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {
                "Build, manage, and grow your wealth with our industry-leading financial platform. Trusted by thousands of investors worldwide."
              }
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button size="lg" className="gap-2 text-base" onClick={handleGetStarted}>
                {"Get Started"}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" onClick={handleScheduleDemo}>
                {"Schedule a Demo"}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>{"SEC Registered"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span>{"Bank-Level Security"}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span>{"24/7 Support"}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80"
                alt="Financial Dashboard with Analytics and Charts"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Portfolio Growth</p>
                  <p className="text-2xl font-bold text-foreground">+24.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
