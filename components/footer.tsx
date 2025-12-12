"use client"

import { Building2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function Footer() {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    console.log(`[v0] Footer navigation clicked: ${href}`)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(href)
    }
  }

  const navigation = {
    product: [
      { name: "Wealth Management", href: "#services" },
      { name: "Investment Advisory", href: "#services" },
      { name: "Retirement Planning", href: "#services" },
      { name: "Corporate Solutions", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#home" },
      { name: "Careers", href: "#contact" },
      { name: "Press", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Disclosures", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  }

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Building2 className="h-6 w-6 text-accent" />
              {"FinanceHub"}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {"Building wealth through intelligent financial solutions. Trusted by investors worldwide."}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{"Product"}</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{"Company"}</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{"Legal"}</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {
              "© 2025 FinanceHub. All rights reserved. Securities offered through licensed broker-dealers. Member FINRA/SIPC."
            }
          </p>
        </div>
      </div>
    </footer>
  )
}
