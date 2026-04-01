import { HajjAddonGroup, HajjHotel, HajjPackage, PackageRoomPrice } from "@/data/types";

const room = (
  label: string,
  pkr: number,
  sar?: string,
  usd?: string,
  note?: string,
): PackageRoomPrice => ({
  label,
  pkr,
  sar,
  usd,
  note,
});

const hotel = (title: string, details: string[]): HajjHotel => ({
  title,
  details,
});

const addOnGroup = (title: string, items: string[]): HajjAddonGroup => ({
  title,
  items,
});

export const hajjPackages: HajjPackage[] = [
  {
    id: "titanium-5-star",
    name: "5-Star Titanium Package",
    headingLabel: "Titanium 5-Star / 5-Star Titanium Package",
    duration: "11-12 Days",
    maktab: "A",
    zone: "1",
    startingPrice: 3499000,
    recommended: true,
    roomPrices: [
      room("Quad", 3499000, "SR 46,100", "USD 12,450"),
      room("Triple", 3175000, "SR 41,800", "USD 11,300"),
      room("Double", 4350000, "SR 57,300", "USD 15,500"),
    ],
    includes: [
      "Hotel",
      "Ziyarat",
      "Transportation",
      "Train (Med to Makkah)",
      "Ticket",
      "Food",
      "Assistance",
      "Training programs",
      "Gifts",
    ],
    addOns: [
      addOnGroup("Required extras", [
        "If Qurbani is compulsory by Saudi government, Haji must have to pay extra",
      ]),
      addOnGroup("Private add-on services", [
        "Private Ziarats",
        "Tawaf-e-Ziarat",
        "Wheel Chair",
        "These are charged extra at time of booking",
      ]),
      addOnGroup("Aziziyah Makkah Hotel Separate Room", [
        "Quad per person 1,700 SAR",
        "Triple per person 2,500 SAR",
        "Double per person 5,000 SAR",
      ]),
    ],
    hotels: [
      hotel("Makkan Aziziyah Hotel", [
        "Makkah Aziziyah hotel",
        "Full Board",
        "Round the clock wifi access & cold beverages",
      ]),
      hotel("Makkah 5-Star Hotel", [
        "Movenpick / Anjum Tower / Makka tower or similar",
        "150 meters (4 nights)",
        "Half Board Buffet",
      ]),
      hotel("Madina 4-Star Hotel", [
        "4-Star hotel",
        "Movenpick / Dar-ul-Taqwa or similar",
        "2 nights",
        "Half Board Buffet",
      ]),
    ],
    schedule: [
      "2 Zil Hajj to 4 Zil Hajj (Madina Hotel 5-star)",
      "4 Zil Hajj to 8 Zil Hajj (Makkah Hotel 5-star)",
      "8 Zil Hajj to 13 Zil Hajj (Hajj days - All services provided by Maktab)",
      "13/14 Zil Hajj return",
    ],
    notes: [
      "According to Saudi regulations, bus transport from hotel to Haram will not provided from the 5th to the 15th of Zil-Hijjah",
      "If the zone category is downgraded for any reason, the difference in the amount will be refunded accordingly",
      "Haji himself must appear in office or in video call for verifying for hajj protocols and for the agreement signing",
    ],
  },
  {
    id: "platinum-star",
    name: "Platinum Star Package",
    duration: "15-16 Days",
    maktab: "A",
    zone: "1",
    startingPrice: 2899000,
    recommended: true,
    roomPrices: [
      room("Sharing", 2899000, "SR 38,200", "USD 10,350", "5 persons"),
      room("Quad", 2975000, "SR 39,200", "USD 10,600"),
      room("Triple", 3175000, "SR 41,800", "USD 11,300"),
      room("Double", 3375000, "SR 44,500", "USD 12,000"),
    ],
    includes: [
      "Hotel",
      "Ziarat",
      "Transportation",
      "Train (Med to Makkah)",
      "Ticket",
      "Food",
      "Assistance",
      "Training programs",
      "Gifts",
    ],
    addOns: [
      addOnGroup("Required extras", [
        "If Qurbani is compulsory by Saudi government, Haji must have to pay extra",
        "10-12 Days Early Ticket: 2,500 SAR",
      ]),
      addOnGroup("Private add-on services", [
        "Private Ziarats",
        "Tawaf-e-Ziarat",
        "Wheel Chair",
        "Charged extra at time of booking",
      ]),
      addOnGroup("Aziziyah Makkah Hotel Separate Room", [
        "Quad per person 1,000 SAR",
        "Triple per person 2,500 SAR",
        "Double per person 5,000 SAR",
      ]),
    ],
    hotels: [
      hotel("Makkah Aziziyah Hotel", [
        "Makkah Aziziyah hotel",
        "Full Board",
        "Round the clock wifi access & cold beverages",
      ]),
      hotel("Makkah 5-Star Hotel", [
        "Marriott / Address / Hilton or similar",
        "150 meters",
        "1 day",
        "Half Board Buffet",
      ]),
      hotel("Madina 4-Star Hotel", [
        "4-Star Hotel",
        "Markazia",
        "4 days",
        "Half Board Buffet",
      ]),
    ],
    schedule: [
      "1-2 Zil Hajj to 4-5 Zil Hajj (Madina Hotel)",
      "5 Zil Hajj to 7 Zil Hajj (Makkah Hotel Aziziyah)",
      "7 Zil Hajj to 13 Zil Hajj (Hajj days - All services provided by Maktab)",
      "14-15 Zil Hajj to 16-17 Zil Hajj (Makkah Hotel)",
    ],
    notes: [
      "According to Saudi regulations, bus transport from hotel to Haram will not provided from the 5th to the 15th of Zil-Hijjah",
      "If the zone category is downgraded for any reason, the difference in the amount will be refunded accordingly",
      "Haji himself must appear in office or in video call for verifying for hajj protocols and for the agreement signing",
    ],
  },
  {
    id: "3-star-d",
    name: "3 Star Hajj Package D",
    duration: "15-17 Days",
    maktab: "D",
    zone: "5",
    startingPrice: 1695000,
    roomPrices: [
      room("Quad", 1695000, "SR 22,600", "USD 6,100", "only in Mad Hotel"),
      room("Triple", 1795000, "SR 24,000", "USD 6,500", "only in Med Hotel"),
      room("Double", 1895000, "SR 25,300", "USD 6,850", "only in Med Hotel"),
    ],
    includes: [
      "Hotel",
      "Ziarat",
      "Transportation",
      "Ticket",
      "Food",
      "Assistance",
      "Training programs",
      "Gifts",
    ],
    addOns: [
      addOnGroup("Required extras", [
        "If Qurbani is compulsory by Saudi government, Haji must have to pay extra",
        "11-14 Days Early Ticket: 1,500 SAR",
      ]),
      addOnGroup("Makkah Building Separate Room", [
        "Quint per person 500 SAR",
        "Quad per person 1,000 SAR",
        "Triple per person 2,000 SAR",
        "Double per person 4,000 SAR",
      ]),
    ],
    hotels: [
      hotel("Makkah", [
        "Makkah Building 2000-3000 meters",
        "if above from 2000 meters shuttle service will be provided",
        "2-3 dishes buffet style",
      ]),
      hotel("Madina", [
        "3 Star Madina 150 meters",
        "Sanabel Madina or similar",
        "4 days",
      ]),
    ],
    schedule: [
      "1-2 Zil Hajj to 4-5 Zil Hajj (Madina Hotel)",
      "5 Zil Hajj to 7 Zil Hajj (Makkah Building)",
      "7 Zil Hajj to 13 Zil Hajj (Hajj days - All services provided by Maktab)",
      "15-16 Zil Hajj to 19-20 Zil Hajj (Makkah Hotel 5-star)",
    ],
    notes: [
      "According to Saudi regulations, bus transport from hotel to Haram will not provided from the 5th to the 15th of Zil-Hijjah",
      "If the zone category is downgraded for any reason, the difference in the amount will be refunded accordingly",
      "Haji himself must appear in office or in video call for verifying for hajj protocols and for the agreement signing",
    ],
  },
  {
    id: "aziziyah-package",
    name: "Aziziyah Package",
    duration: "13-15 Days",
    maktab: "A",
    zone: "1",
    startingPrice: 2499000,
    roomPrices: [
      room("Sharing", 2499000, "SR 33,000", "USD 8,950", "5 persons"),
      room("Quad", 2545000, "SR 33,500", "USD 9,050", "only in Madina Hotel"),
      room("Triple", 2665000, "SR 35,100", "USD 9,500", "only in Madina Hotel"),
      room("Double", 2815000, "SR 37,100", "USD 10,050", "only in Madina Hotel"),
    ],
    includes: [
      "Hotel",
      "Ziarat",
      "Transportation",
      "Train (Med to Makkah)",
      "Ticket",
      "Food",
      "Assistance",
      "Training programs",
      "Gifts",
    ],
    addOns: [
      addOnGroup("Required extras", [
        "If Qurbani is compulsory by Saudi government, Haji must have to pay extra",
        "10-12 Days Early Ticket: 2,500 SAR",
      ]),
      addOnGroup("Private add-on services", [
        "Private Ziarats",
        "Tawaf-e-Ziarat",
        "Wheel Chair",
        "Charged extra at time of booking",
      ]),
      addOnGroup("Aziziyah Makkah Hotel Separate Room", [
        "Quad per person 1,000 SAR",
        "Triple per person 2,500 SAR",
        "Double per person 5,000 SAR",
      ]),
    ],
    hotels: [
      hotel("Makkah Aziziyah Hotel", [
        "Makkah Aziziyah Hotel",
        "Full Board",
        "Round the clock wifi access & cold beverages",
      ]),
      hotel("Madina 4-Star Hotel", [
        "4-Star Hotel",
        "Markazia",
        "4 days",
        "Half Board Buffet",
      ]),
    ],
    schedule: [
      "1-2 Zil Hajj to 4-5 Zil Hajj (Madina Hotel)",
      "5 Zil Hajj to 7 Zil Hajj (Makkah Hotel)",
      "7 Zil Hajj to 13 Zil Hajj (Hajj days - All services provided by Maktab)",
      "13 Zil Hajj to 14-15 Zil Hajj (Makkah Hotel)",
    ],
    notes: [
      "According to Saudi regulations, bus transport from hotel to Haram will not provided from the 5th to the 15th of Zil-Hijjah",
      "If the zone category is downgraded for any reason, the difference in the amount will be refunded accordingly",
      "Haji himself must appear in office or in video call for verifying for hajj protocols and for the agreement signing",
    ],
  },
];
