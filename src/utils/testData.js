const TEST_ORDERLINES = [
  {
    OrderLineID: 13,
    OrderID: 4,
    StockItemID: 50,
    Description: "Developer joke mug - old C developers never die (White)",
    PackageTypeID: 1,
    Quantity: 2,
    UnitPrice: 13,
  },
  {
    OrderLineID: 27,
    OrderID: 8,
    StockItemID: 9,
    Description: "USB food flash drive - banana",
    PackageTypeID: 1,
    Quantity: 4,
    UnitPrice: 32,
  },
  {
    OrderLineID: 41,
    OrderID: 53,
    StockItemID: 170,
    Description: "20 mm Anti static bubble wrap (Blue) 50m",
    PackageTypeID: 1,
    Quantity: 90,
    UnitPrice: 102,
  },
  {
    OrderLineID: 55,
    OrderID: 15,
    StockItemID: 108,
    Description: "Superhero action jacket (Blue) XXS",
    PackageTypeID: 1,
    Quantity: 6,
    UnitPrice: 25,
  },
  {
    OrderLineID: 69,
    OrderID: 59,
    StockItemID: 167,
    Description: "10 mm Anti static bubble wrap (Blue) 50m",
    PackageTypeID: 1,
    Quantity: 60,
    UnitPrice: 99,
  },
  {
    OrderLineID: 83,
    OrderID: 23,
    StockItemID: 54,
    Description: "IT joke mug - that behavior is by design (White)",
    PackageTypeID: 1,
    Quantity: 3,
    UnitPrice: 13,
  },
  {
    OrderLineID: 97,
    OrderID: 28,
    StockItemID: 42,
    Description:
      "Developer joke mug - understanding recursion requires understanding recursion (White)",
    PackageTypeID: 1,
    Quantity: 1,
    UnitPrice: 13,
  },
  {
    OrderLineID: 111,
    OrderID: 32,
    StockItemID: 104,
    Description: "Alien officer hoodie (Black) 3XL",
    PackageTypeID: 1,
    Quantity: 7,
    UnitPrice: 35,
  },
  {
    OrderLineID: 125,
    OrderID: 72,
    StockItemID: 210,
    Description: "Packing knife with metal insert blade (Yellow) 18mm",
    PackageTypeID: 1,
    Quantity: 45,
    UnitPrice: 2.4,
  },
  {
    OrderLineID: 139,
    OrderID: 39,
    StockItemID: 120,
    Description: "Dinosaur battery-powered slippers (Green) L",
    PackageTypeID: 1,
    Quantity: 6,
    UnitPrice: 32,
  },
  {
    OrderLineID: 153,
    OrderID: 43,
    StockItemID: 120,
    Description: "Dinosaur battery-powered slippers (Green) L",
    PackageTypeID: 1,
    Quantity: 9,
    UnitPrice: 32,
  },
];

const MOCK_API_RESPONSE = {
    successState: {
        res: {
            status: 200,
            data: TEST_ORDERLINES,
        }
    },
    errorState: {
        res: {
            status: 400,
            data: {}
        }
    }
}

export {
    TEST_ORDERLINES,
    MOCK_API_RESPONSE
}