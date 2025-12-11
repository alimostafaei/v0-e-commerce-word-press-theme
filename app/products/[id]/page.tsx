import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getProductById, products } from "@/lib/products-data"
import { ShoppingCart, Star, Package, MapPin, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(Number.parseInt(id))

  if (!product) {
    notFound()
  }

  // Get related products (same category)
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              خانه
            </Link>
            <ArrowRight className="h-4 w-4 rotate-180" />
            <Link href="/#products" className="hover:text-foreground">
              محصولات
            </Link>
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/30">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.rating >= 4.8 && (
                <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground">پرفروش</Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div>
                <h1 className="text-balance text-3xl font-bold md:text-4xl">{product.name}</h1>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">{product.description}</p>

                {/* Rating */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} نظر کاربران)</span>
                </div>

                {/* Product Details */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Package className="h-5 w-5" />
                    <span>وزن: {product.weight}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>مبدا: {product.origin}</span>
                  </div>
                </div>

                {/* Full Description */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold">توضیحات محصول</h2>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{product.fullDescription}</p>
                </div>

                {/* Benefits */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold">مزایا و خواص</h2>
                  <ul className="mt-4 space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price and CTA - Sticky at bottom */}
              <div className="mt-8 border-t pt-6 lg:mt-auto">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">قیمت</span>
                    <div className="mt-1 text-3xl font-bold text-accent">{product.price} تومان</div>
                  </div>
                  <Button size="lg" className="gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    افزودن به سبد خرید
                  </Button>
                </div>
                <div className="mt-4 rounded-lg bg-secondary/50 p-4">
                  <p className="text-pretty text-sm text-muted-foreground">
                    ارسال رایگان برای سفارش‌های بالای ۵۰۰,۰۰۰ تومان • تضمین کیفیت ۱۰۰٪
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-balance text-2xl font-bold md:text-3xl">محصولات مرتبط</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">{relatedProduct.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{relatedProduct.description}</p>
                        <div className="mt-4 text-xl font-bold text-accent">{relatedProduct.price} تومان</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
