import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 py-24 md:px-6 md:py-32 lg:py-40">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                عسل و زعفران طبیعی
                <br />
                <span className="text-accent">مستقیم از تولیدکننده</span>
              </h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                خرید مستقیم از تولیدکنندگان محلی با تضمین کیفیت، بسته‌بندی شیک و ارسال رایگان به تمام نقاط ایران. طعم
                واقعی طبیعت را تجربه کنید.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2">
                مشاهده محصولات
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                درباره ما
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-accent">۱۰۰٪</div>
                <div className="text-sm text-muted-foreground">طبیعی و ارگانیک</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">۲۴ ساعته</div>
                <div className="text-sm text-muted-foreground">پشتیبانی</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">رایگان</div>
                <div className="text-sm text-muted-foreground">ارسال سراسری</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <img src="/----------------------------------------.jpg" alt="عسل طبیعی" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-card p-6 shadow-lg">
              <div className="text-sm text-muted-foreground">محصول برتر</div>
              <div className="text-xl font-bold">عسل چهل گیاه</div>
              <div className="text-2xl font-bold text-accent">۴۵۰,۰۰۰ تومان</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
