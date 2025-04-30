import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const CartSheet = () => {
// @ts-ignore
  const cartItems = [] // Replace with your actual cart data
  const totalAmount = 0.0 // Replace with your total calculation

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="h-9 w-9 transition-colors duration-300 hover:bg-zinc-100 group-hover:text-white group-hover:hover:bg-white/10"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full max-w-md p-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Shopping Cart</SheetTitle>
          <SheetDescription>
            Review your selected items before checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 h-[calc(100%-150px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center text-muted-foreground py-10">
              Your cart is empty
            </div>
          ) : (
            // @ts-ignore
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b pb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-1 text-sm">Qty: {item.quantity}</div>
                </div>
                <div className="font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t pt-6 space-y-4">
          <div className="flex justify-between text-lg">
            <span>Total</span>
            <span className="font-bold">₹{totalAmount.toFixed(2)}</span>
          </div>
          <Link href="/checkout">
            <Button className="w-full" disabled={cartItems.length === 0}>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
