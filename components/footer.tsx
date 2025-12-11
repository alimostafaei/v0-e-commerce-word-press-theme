import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">عسل طبیعی</h3>
            <p className="text-pretty text-sm text-muted-foreground">
              فروش مستقیم عسل و زعفران طبیعی از تولیدکنندگان محلی با تضمین کیفیت و ارسال به سراسر ایران
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">دسترسی سریع</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground transition-colors hover:text-foreground">
                  محصولات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">خدمات مشتریان</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground transition-colors hover:text-foreground">
                  راهنمای خرید
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground transition-colors hover:text-foreground">
                  شرایط بازگشت کالا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  حریم خصوصی
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">تماس با ما</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@honey.ir</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">تهران، میدان ونک، خیابان ملاصدرا</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© ۱۴۰۳ عسل طبیعی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
