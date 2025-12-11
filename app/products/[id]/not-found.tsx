import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PackageX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-md text-center">
            <PackageX className="mx-auto h-20 w-20 text-muted-foreground" />
            <h1 className="mt-6 text-balance text-3xl font-bold">محصول یافت نشد</h1>
            <p className="mt-4 text-pretty text-muted-foreground">
              متاسفانه محصول مورد نظر شما پیدا نشد. لطفاً به صفحه محصولات بازگردید.
            </p>
            <Link href="/" className="mt-8 inline-block">
              <Button size="lg">بازگشت به صفحه اصلی</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
