import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products-data"

export function Products() {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">محصولات پرفروش</h2>
          <p className="mt-4 text-pretty text-muted-foreground md:text-lg">بهترین محصولات ما را کشف کنید</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} نظر)</span>
                </div>
                <div className="mt-4 text-2xl font-bold text-accent">{product.price} تومان</div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/products/${product.id}`} className="w-full">
                  <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    افزودن به سبد خرید
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            مشاهده تمام محصولات
          </Button>
        </div>
      </div>
    </section>
  )
}
