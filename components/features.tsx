import { Shield, Truck, Award, Leaf } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "محصولات طبیعی",
    description: "تمامی محصولات ما ۱۰۰٪ طبیعی و ارگانیک هستند",
  },
  {
    icon: Shield,
    title: "تضمین کیفیت",
    description: "تمامی محصولات دارای مجوز و گواهی کیفیت معتبر",
  },
  {
    icon: Truck,
    title: "ارسال سراسری",
    description: "ارسال رایگان به تمام نقاط ایران با بسته‌بندی شیک",
  },
  {
    icon: Award,
    title: "مستقیم از تولیدکننده",
    description: "خرید مستقیم از تولیدکنندگان محلی با قیمت مناسب",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">چرا ما را انتخاب کنید؟</h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">با اطمینان از ما خرید کنید</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-pretty text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
