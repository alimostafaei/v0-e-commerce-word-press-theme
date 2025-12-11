import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">عسل طبیعی</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            صفحه اصلی
          </Link>
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
            محصولات
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            درباره ما
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            تماس با ما
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
              0
            </span>
          </Button>
          <Button className="hidden md:inline-flex">ورود / ثبت‌نام</Button>
        </div>
      </div>
    </header>
  )
}
