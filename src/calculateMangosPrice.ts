const ThreePerTwoOffer = 3;

function threePerTwoDiscount(amount: number, price: number) {
    return Math.floor(amount / ThreePerTwoOffer) * price;
}

export function calculateMangosPrice(amount:number|null,price:number|null): number {
   if (amount === null || price === null) {
       return 0
   }

   const totalCost = amount * price
   return totalCost - threePerTwoDiscount(amount, price)
}