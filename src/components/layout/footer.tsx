import { GraduationCap, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="w-4 h-4" />
            <span>Pass My GED — Free GED prep for everyone</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>to help you succeed by</span>
            <a
              href="https://tego.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-bold"
            >
              tego.dev
            </a>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/math" className="text-muted-foreground hover:text-foreground transition-colors">
              Math
            </Link>
            <Link href="/science" className="text-muted-foreground hover:text-foreground transition-colors">
              Science
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
