"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function CTA() {
  const router = useRouter()

  const handleOpenAccount = () => {
    console.log("[v0] Open account clicked")
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleTalkToAdvisor = () => {
    console.log("[v0] Talk to advisor clicked")
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=2000&h=1000&fit=crop&q=80"
              alt="Financial Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/95" />
          </div>

          <div className="relative z-10 px-8 py-20 text-center sm:px-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                {"Ready to Transform Your Financial Future?"}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
                {
                  "Join thousands of investors who trust us with their wealth. Get started today with no minimum deposit."
                }
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                <Button size="lg" variant="secondary" className="gap-2 text-base" onClick={handleOpenAccount}>
                  {"Open an Account"}
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary-foreground/20 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  onClick={handleTalkToAdvisor}
                >
                  {"Talk to an Advisor"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
