const servicesList = [
   // Manga services
   { category: "Manga", name: "Manga", duration: "120 minuter", price: "689 kr", unavailable: true },
   { category: "Manga", name: "Påfyllning manga v.2", duration: "90 minuter", price: "454 kr" },
   { category: "Manga", name: "Påfyllning manga v.3", duration: "90 minuter", price: "469 kr" },
   { category: "Manga", name: "Påfyllning manga v4-5", duration: "90 minuter", price: "514 kr" },
   { category: "Manga", name: "Stor påfyllning manga", duration: "105 minuter", price: "569 kr" },
   { category: "Manga", name: "Mini påfyllning manga", duration: "30 minuter", price: "324 kr" },

   // Naturligt volym services
   { category: "Naturligt volym", name: "Naturligt volym", duration: "120 minuter", price: "789 kr" },
   { category: "Naturligt volym", name: "Mini påfyllning naturliga volym", duration: "30 minuter", price: "363 kr" },
   { category: "Naturligt volym", name: "Naturliga volym påfyllning v.4-5", duration: "90 minuter", price: "636 kr" },
   { category: "Naturligt volym", name: "På fyllning naturliga volym v.2", duration: "90 minuter", price: "456 kr" },
   { category: "Naturligt volym", name: "På fyllning naturliga volym v.3", duration: "90 minuter", price: "542 kr" },
   { category: "Naturligt volym", name: "Stor påfyllning Naturliga volym", duration: "105 minuter", price: "689 kr" },

   // Rabbit lash services
   { category: "Rabbit lash", name: "Rabbit lash", duration: "120 minuter", price: "689 kr", unavailable: true },
   { category: "Rabbit lash", name: "Påfyllning rabbit lash v.2", duration: "120 minuter", price: "454 kr" },
   { category: "Rabbit lash", name: "Påfyllning rabbit lash v.3", duration: "90 minuter", price: "469 kr" },
   { category: "Rabbit lash", name: "Påfyllning rabbit lash v.4-5", duration: "90 minuter", price: "514 kr" },
   { category: "Rabbit lash", name: "Stor påfyllning rabbit lash", duration: "105 minuter", price: "569 kr" },
   { category: "Rabbit lash", name: "Mini påfyllning rabbit lash", duration: "30 minuter", price: "324 kr" },

   // Singel fransar services
   { category: "Singel fransar", name: "Singel fransar", duration: "120 minuter", price: "569 kr" },
   { category: "Singel fransar", name: "På fyllning singel v.3", duration: "90 minuter", price: "454 kr" },
   { category: "Singel fransar", name: "Mini påfyllning singel", duration: "30 minuter", price: "289 kr" },
   { category: "Singel fransar", name: "På fyllning singel v.2", duration: "90 minuter", price: "369 kr" },
   { category: "Singel fransar", name: "Påfyllning singel v.4-5", duration: "90 minuter", price: "469 kr" },
   { category: "Singel fransar", name: "Stor påfyllning singel", duration: "90 minuter", price: "514 kr" },

   // B Queen services
   { category: "B Queen", name: "B Queen", duration: "120 minuter", price: "888 kr" },
   { category: "B Queen", name: "B Queen mini påfyllning", duration: "30 minuter", price: "415 kr" },
   { category: "B Queen", name: "B Queen Påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "B Queen", name: "B Queen Påfyllning v.4-5", duration: "105 minuter", price: "689 kr" },
   { category: "B Queen", name: "B Queen Stor påfyllning", duration: "90 minuter", price: "789 kr" },
   { category: "B Queen", name: "B Queen Påfyllning v.3", duration: "90 minuter", price: "569 kr" },

   // Babie lash services
   { category: "Babie lash", name: "Babie lash", duration: "120 minuter", price: "569 kr" },
   { category: "Babie lash", name: "Babie lash påfyllning v.2", duration: "90 minuter", price: "369 kr" },
   { category: "Babie lash", name: "Babie lash påfyllning v.3", duration: "90 minuter", price: "454 kr" },
   { category: "Babie lash", name: "Babie lash påfyllning v.4-5", duration: "90 minuter", price: "469 kr" },
   { category: "Babie lash", name: "Mini påfyllning Babie lash", duration: "30 minuter", price: "289 kr" },
   { category: "Babie lash", name: "Stor påfyllning Babie lash", duration: "105 minuter", price: "514 kr" },

   // Baby pink services
   { category: "Baby pink", name: "Baby pink", duration: "120 minuter", price: "888 kr" },
   { category: "Baby pink", name: "Baby pink påfyllning v.4-5", duration: "90 minuter", price: "689 kr" },
   { category: "Baby pink", name: "Baby pink påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "Baby pink", name: "Baby pink påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "Baby pink", name: "Mini påfyllning Baby pink", duration: "30 minuter", price: "415 kr" },
   { category: "Baby pink", name: "Stor påfyllning Baby pink", duration: "105 minuter", price: "789 kr" },

   // Bloom services
   { category: "Bloom", name: "Bloom", duration: "120 minuter", price: "888 kr" },
   { category: "Bloom", name: "Bloom Mini påfyllning", duration: "30 minuter", price: "415 kr" },
   { category: "Bloom", name: "Bloom Påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "Bloom", name: "Bloom Påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "Bloom", name: "Bloom Påfyllning v.4-5", duration: "90 minuter", price: "689 kr" },
   { category: "Bloom", name: "Bloom Stor påfyllning", duration: "105 minuter", price: "789 kr" },

   // Borttagning services
   { category: "Borttagning", name: "Borttagning", duration: "30 minuter", price: "189 kr" },

   // Butterfly lash services
   { category: "Butterfly lash", name: "Butterfly lash", duration: "120 minuter", price: "789 kr" },
   { category: "Butterfly lash", name: "Butterfly lash på fyllning v.3", duration: "90 minuter", price: "542 kr" },
   { category: "Butterfly lash", name: "Butterfly lash påfyllning v.2", duration: "90 minuter", price: "456 kr" },
   { category: "Butterfly lash", name: "Butterfly lash påfyllning v.4-5", duration: "90 minuter", price: "636 kr" },
   { category: "Butterfly lash", name: "Mini påfyllning Butterfly lash", duration: "30 minuter", price: "363 kr" },
   { category: "Butterfly lash", name: "Stor påfyllning Butterfly lash", duration: "105 minuter", price: "689 kr" },

   // Cherrie services
   { category: "Cherrie", name: "Cherrie påfyllning v.3", duration: "90 minuter", price: "469 kr" },
   { category: "Cherrie", name: "Cherrie", duration: "120 minuter", price: "689 kr" },
   { category: "Cherrie", name: "Cherrie mini påfyllning", duration: "30 minuter", price: "324 kr" },
   { category: "Cherrie", name: "Cherrie påfyllning v.2", duration: "90 minuter", price: "454 kr" },
   { category: "Cherrie", name: "Cherrie påfyllning v.4-5", duration: "90 minuter", price: "514 kr" },
   { category: "Cherrie", name: "Cherrie stor påfyllning", duration: "102 minuter", price: "569 kr" },

   // Classic wispy services
   { category: "Classic Wispy", name: "Classic Wispy", duration: "120 minuter", price: "689 kr" },
   { category: "Classic Wispy", name: "Classic wipsy påfyllning v.2", duration: "90 minuter", price: "454 kr" },
   { category: "Classic Wispy", name: "Classic wispy mini påfyllning", duration: "30 minuter", price: "324 kr" },
   { category: "Classic Wispy", name: "Classic Wispy påfyllning v.3", duration: "90 minuter", price: "469 kr" },
   { category: "Classic Wispy", name: "Classic wispy påfyllning v.4-5", duration: "90 minuter", price: "514 kr" },
   { category: "Classic Wispy", name: "Classic wispy stor påfyllning", duration: "90 minuter", price: "569 kr" },

   // CoCo lash services
   { category: "CoCo lash", name: "CoCo lash", duration: "120 minuter", price: "789 kr" },
   { category: "CoCo lash", name: "Coco lash på fyllning v.2", duration: "90 minuter", price: "456 kr" },
   { category: "CoCo lash", name: "Coco lash påfyllning v.3", duration: "90 minuter", price: "542 kr" },
   { category: "CoCo lash", name: "Coco lash påfyllning v.4-5", duration: "90 minuter", price: "636 kr" },
   { category: "CoCo lash", name: "Mini påfyllning Cocolash", duration: "30 minuter", price: "363 kr" },
   { category: "CoCo lash", name: "Stor påfyllning Cocolash", duration: "105 minuter", price: "689 kr" },

   // Flat lash services
   { category: "Flat lash", name: "Flat lash", duration: "120 minuter", price: "689 kr" },
   { category: "Flat lash", name: "Mini påfyllning Flat lash", duration: "30 minuter", price: "324 kr" },
   { category: "Flat lash", name: "Påfyllning flat lash v.2", duration: "90 minuter", price: "454 kr" },
   { category: "Flat lash", name: "Påfyllning flat lash v.4-5", duration: "90 minuter", price: "514 kr" },
   { category: "Flat lash", name: "Påfyllning flat lash v.3", duration: "90 minuter", price: "469 kr" },
   { category: "Flat lash", name: "Stor påfyllning Flat lash", duration: "105 minuter", price: "569 kr" },

   // Foxy lash services
   { category: "Foxy lash", name: "Foxy lash", duration: "120 minuter", price: "789 kr" },
   { category: "Foxy lash", name: "Foxy lash påfyllning v.4-5", duration: "90 minuter", price: "636 kr" },
   { category: "Foxy lash", name: "Mini påfyllning Foxy lash", duration: "30 minuter", price: "363 kr" },
   { category: "Foxy lash", name: "På fyllning foxy lash v.2", duration: "90 minuter", price: "456 kr" },
   { category: "Foxy lash", name: "På fyllning foxy lash v.3", duration: "90 minuter", price: "542 kr" },
   { category: "Foxy lash", name: "Stor påfyllning Foxy lash", duration: "105 minuter", price: "689 kr" },

   // Honey services
   { category: "Honey", name: "Honey", duration: "120 minuter", price: "888 kr" },
   { category: "Honey", name: "Honey Mini påfyllning", duration: "30 minuter", price: "415 kr" },
   { category: "Honey", name: "Honey Påfyllning v. 4-5", duration: "90 minuter", price: "689 kr" },
   { category: "Honey", name: "Honey påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "Honey", name: "Honey Påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "Honey", name: "Honey Stor påfyllning", duration: "105 minuter", price: "789 kr" },

   // I’m in love services
   { category: "I’m in love", name: "I’m in love", duration: "120 minuter", price: "888 kr" },
   { category: "I’m in love", name: "I’m in love Mini påfyllning", duration: "30 minuter", price: "415 kr" },
   { category: "I’m in love", name: "I’m in love Påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "I’m in love", name: "I’m in love påfyllning V.3", duration: "90 minuter", price: "569 kr" },
   { category: "I’m in love", name: "I’m in love Stor påfyllning", duration: "105 minuter", price: "789 kr" },
   { category: "I’m in love", name: "I’m in love påfyllning v.4-5", duration: "90 minuter", price: "689 kr" },

   // kim k lash services
   { category: "Kim K lash", name: "Kim K lash", duration: "120 minuter", price: "789 kr" },
   { category: "Kim K lash", name: "Kim k påfyllning V4-5", duration: "90 minuter", price: "636 kr" },
   { category: "Kim K lash", name: "Mini påfyllning Kim K lash", duration: "30 minuter", price: "363 kr" },
   { category: "Kim K lash", name: "På fyllning kim k v.2", duration: "90 minuter", price: "456 kr" },
   { category: "Kim K lash", name: "På fyllning kim k v.3", duration: "90 minuter", price: "542 kr" },
   { category: "Kim K lash", name: "Stor påfyllning Kim K lash", duration: "105 minuter", price: "689 kr" },

   // lemon fransar med färger services
   { category: "Lemon (fransar med färger)", name: "Lemon (fransar med färger)", duration: "60 minuter", price: "324 kr" },

   // Love stone services
   { category: "Love stone", name: "Love stone", duration: "120 minuter", price: "888 kr" },
   { category: "Love stone", name: "Love stone Mini påfyllning", duration: "30 minuter", price: "415 kr" },
   { category: "Love stone", name: "Love stone Påfyllning v 2", duration: "90 minuter", price: "469 kr" },
   { category: "Love stone", name: "Love stone Påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "Love stone", name: "Love stone Påfyllning v.4-5", duration: "90 minuter", price: "689 kr" },
   { category: "Love stone", name: "Love stone Stor påfyllning", duration: "90 minuter", price: "789 kr" },

   // Mega Doll lash services
   { category: "Mega Doll lash", name: "Mega Doll lash", duration: "120 minuter", price: "789 kr" },
   { category: "Mega Doll lash", name: "Mega doll lash påfyllning v.4-5", duration: "90 minuter", price: "636 kr" },
   { category: "Mega Doll lash", name: "Megadoll lash påfyllning v.3", duration: "90 minuter", price: "542 kr" },
   { category: "Mega Doll lash", name: "Megadoll lash påfyllning v.2", duration: "90 minuter", price: "456 kr" },
   { category: "Mega Doll lash", name: "Mini påfyllning Mega doll lash", duration: "30 minuter", price: "363 kr" },
   { category: "Mega Doll lash", name: "Stor påfyllning Mega doll lash", duration: "105 minuter", price: "689 kr" },

   // Mix fransar services
   { category: "Mix fransar", name: "Mix fransar", duration: "120 minuter", price: "689 kr" },
   { category: "Mix fransar", name: "Mini påfyllning Mix fransar", duration: "30 minuter", price: "324 kr" },
   { category: "Mix fransar", name: "Mix påfyllning v.4-5", duration: "90 minuter", price: "514 kr" },
   { category: "Mix fransar", name: "På fyllning Mix v2", duration: "90 minuter", price: "454 kr" },
   { category: "Mix fransar", name: "På fyllning Mix v 3", duration: "90 minuter", price: "469 kr" },
   { category: "Mix fransar", name: "Stor påfyllning Mix fransar", duration: "105 minuter", price: "569 kr" },

   // My favourite services
   { category: "My favourite", name: "My favourite", duration: "120 minuter", price: "888 kr" },
   { category: "My favourite", name: "My favourite Mini påfyllning", duration: "30 minuter", price: "415 kr" },
   { category: "My favourite", name: "My favourite Påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "My favourite", name: "My favourite Påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "My favourite", name: "My favourite Påfyllning v.4-5", duration: "90 minuter", price: "689 kr" },
   { category: "My favourite", name: "My favourite Stor påfyllning", duration: "105 minuter", price: "789 kr" },

   // Pick test för er som är känsliga ögon service
   { category: "Pick test för er som är känsliga ögon", name: "Pick test för er som är känsliga ögon", duration: "5 minuter", price: "Kostnadsfri" },

   // Pinky baby services
   { category: "Pinky baby", name: "Pinky baby", duration: "120 minuter", price: "888 kr" },
   { category: "Pinky baby", name: "Mini påfyllning Pinky baby", duration: "30 minuter", price: "415 kr" },
   { category: "Pinky baby", name: "Pinky baby påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "Pinky baby", name: "Pinky baby påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "Pinky baby", name: "Pinky baby påfyllning v.4-5", duration: "90 minuter", price: "689 kr" },
   { category: "Pinky baby", name: "Stor påfyllning Pinky baby", duration: "105 minuter", price: "789 kr" },

   // Russian foxy services
   { category: "Russian foxy", name: "Russian foxy", duration: "120 minuter", price: "888 kr" },
   { category: "Russian foxy", name: "Mini påfyllning Russian foxy lash", duration: "30 minuter", price: "415 kr" },
   { category: "Russian foxy", name: "Russian foxy påfyllning v.4-5", duration: "90 minuter", price: "689 kr" },
   { category: "Russian foxy", name: "Russian foxy påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "Russian foxy", name: "Russian foxy påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "Russian foxy", name: "Stor påfyllning Russian Foxy", duration: "105 minuter", price: "789 kr" },

   // Russian volume services
   { category: "Russian volume", name: "Russian volume", duration: "120 minuter", price: "789 kr" },
   { category: "Russian volume", name: "Mini påfyllning Russian volym", duration: "30 minuter", price: "363 kr" },
   { category: "Russian volume", name: "På fyllning Russian volym v.3", duration: "90 minuter", price: "636 kr" },
   { category: "Russian volume", name: "Påfyllning Russian volym v.2", duration: "90 minuter", price: "456 kr" },
   { category: "Russian volume", name: "Russian volym påfyllning v.4-5", duration: "90 minuter", price: "636 kr" },
   { category: "Russian volume", name: "Stor påfyllning Russian volym", duration: "105 minuter", price: "689 kr" },

   // Russian volym services (duplicate name, but different duration)
   { category: "Russian volume", name: "Russian volym", duration: "120 minuter", price: "789 kr" },

   // Summer services
   { category: "Summer", name: "Summer", duration: "120 minuter", price: "324 kr" },
   { category: "Summer", name: "Summer påfyllning v.2", duration: "90 minuter", price: "242 kr" },
   { category: "Summer", name: "Summer påfyllning v.3", duration: "90 minuter", price: "289 kr" },

   // Winnie services
   { category: "Winnie", name: "Winnie", duration: "120 minuter", price: "888 kr" },
   { category: "Winnie", name: "Mini påfyllning Winnie lash", duration: "30 minuter", price: "415 kr" },
   { category: "Winnie", name: "Stor påfyllning Winnie", duration: "105 minuter", price: "789 kr" },
   { category: "Winnie", name: "Winnie påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "Winnie", name: "Winnie påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "Winnie", name: "Winnie påfyllning v.4-5", duration: "90 minuter", price: "789 kr" },

   // Winter services
   { category: "Winter", name: "Winter", duration: "120 minuter", price: "888 kr" },
   { category: "Winter", name: "Mini påfyllning Winter", duration: "30 minuter", price: "415 kr" },
   { category: "Winter", name: "Stor påfyllning Winter", duration: "105 minuter", price: "789 kr" },
   { category: "Winter", name: "Winter påfyllning v.2", duration: "90 minuter", price: "469 kr" },
   { category: "Winter", name: "Winter påfyllning v.3", duration: "90 minuter", price: "569 kr" },
   { category: "Winter", name: "Winter påfyllning v.4-5", duration: "90 minuter", price: "689 kr" },

   // Wispy lash services
   { category: "Wispy lash", name: "Wispy lash", duration: "120 minuter", price: "789 kr" },
   { category: "Wispy lash", name: "Mini påfyllning Wispy lash", duration: "30 minuter", price: "363 kr" },
   { category: "Wispy lash", name: "På fyllning wispy v 3", duration: "90 minuter", price: "542 kr" },
   { category: "Wispy lash", name: "Stor påfyllning Wispy lash", duration: "105 minuter", price: "689 kr" },
   { category: "Wispy lash", name: "Wispy påfyllning v.4-5", duration: "90 minuter", price: "636 kr" },
   { category: "Wispy lash", name: "På fyllning wispy v 2", duration: "90 minuter", price: "456 kr" },

   // Baby services
   { category: "Baby", name: "Baby (ej tillgänglig)", duration: "120 minuter", price: "689 kr" },
   { category: "Baby", name: "Påfyllning baby v.2", duration: "90 minuter", price: "454 kr" },
   { category: "Baby", name: "Påfyllning baby v.3", duration: "90 minuter", price: "469 kr" },
   { category: "Baby", name: "Påfyllning baby v 4-5", duration: "90 minuter", price: "514 kr" },
   { category: "Baby", name: "Mini påfyllning baby", duration: "30 minuter", price: "324 kr" },
   { category: "Baby", name: "Stor påfyllning baby", duration: "105 minuter", price: "569 kr" }
];

export default servicesList;