export interface Products {
  id: number;
  name: string;
  price: number;
  collection: string;
  alert: string;
  description: string;
  imageUrl: string;
  rating: string;
  quantity?:number
}

const products: Products[] = [
  {
    id: 1,
    name: "MAGENTA PALACHI PRINTED UNSTITCHED 3PC",
    rating: "4.5",
    price: 4000,
    collection: "three-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Digital Printed Palachi Shirt: 2.92 Meters Digital Printed Palachi Dupatta: 2.5 Meters Cambric Trouser: 2.5 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-1756_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 2,
    name: "BLUE JACQUARD HANDWOVEN UNSTITCHED 3PC",
    price: 3500,
    rating: "4.9",
    collection: "three-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/j/w/jwu-24-1729_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
  },
  {
    id: 3,
    name: "MULTICOLOR LAWN PRINTED UNSTITCHED 2PC | JJLS-S-JW2-24-2012",
    price: 4500,
    rating: "4.3",
    collection: "two-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/0/2012_2_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 4,
    name: "BLUE LAWN UNSTITCHED 2PC | JLAWN-S-JDS-24-1122",
    price: 3000,
    rating: "4.6",
    collection: "two-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/j/d/jds-24-1122_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 5,
    name: "BLACK LAWN UNSTITCHED 3PC | JLAWN-S-24-137 LUXE-3",
    price: 2800,
    rating: "4.5",
    collection: "three-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-137-1_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
  },
  {
    id: 6,
    name: "Green LAWN UNSTITCHED 3PC | JLAWN-S-23-616",
    price: 3300,
    rating: "4.4",
    collection: "three-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/3/23-616_ethnic_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 7,
    name: "MULTICOLOR CAMBRIC PRINTED UNSTITCHED 1PC",
    price: 1800,
    rating: "4.8",
    collection: "one-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-938_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 8,
    name: "MULTICOLOR CAMBRIC PRINTED UNSTITCHED 1PC",
    price: 1500,
    rating: "5.0",
    collection: "one-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-939_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 9,
    name: "GREEN JACQUARD UNSTITCHED 3PC",
    price: 3900,
    rating: "4.2",
    collection: "three-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-1743_1__1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 10,
    name: "MULTICOLOR CAMBRIC PRINTED UNSTITCHED 2PC",
    price: 2600,
    rating: "4.7",
    collection: "two-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/j/w/jwu-24-1729_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
  },
  {
    id: 11,
    name: "MULTICOLOR KHADDAR PRINTED UNSTITCHED 2PC",
    price: 2800,
    rating: "4.5",
    collection: "two-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-2031_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 12,
    name: "BEIGE LAWN PRINTED UNSTITCHED 2PC | JJLS-S-JW2-24-7007",
    price: 2700,
    rating: "4.9",
    collection: "two-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-7007_2_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 13,
    name: "MULTICOLOR KHADDAR PRINTED UNSTITCHED 1PC",
    price: 1400,
    rating: "4.3",
    collection: "one-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-941_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436",
  },
  {
    id: 14,
    name: "MULTICOLOR LAWN UNSTITCHED 1PC | JLAWN-S-JSU-24-930",
    price: 1600,
    rating: "4.5",
    collection: "one-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/9/3/930_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
  },
  {
    id: 15,
    name: "MULTICOLOR KHADDAR PRINTED UNSTITCHED 1PC",
    price: 1300,
    rating: "4.4",
    collection: "one-piece",
    alert: "Limited Stock Alert: Get Yours Before They're Gone!",
    description:
      "Yarn Dyed Jacquard Shirt: 3.71 Meters Yarn Dyed Jacquard Dupatta: 2.5 Meters Yarn Dyed Trouser: 3 Meters",
    imageUrl:
      "https://www.junaidjamshed.com/media/catalog/product/2/4/24-944_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
  },
];

export default products;
