export const defaultItems = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_ => {
    return {
      ID: "",
      UnitId: "",
      SaleUnitId: "",
      PurchaseUnitId: "",
      CategoryId: "",
      StockAccountId: "",
      Name: "",
      Price: "",
      Cost: "",
      Code: "",
      Barcode: "",
      LockPurchaseCost: "",
      LockSalePrice: "",
      Description: "",
      PointMember: "",
      BrandId: "",
      NotForSale: "",
      CreatedBy: "",
      UpdatedBy: "",
      DeletedBy: "",
      WarehouseId: "",
      Stock: "",
      UnitName: "",
      CategoryName: "",
      Quantity: "",
    }})
}

export function formatIDR(amount) {
    const idFormatter = new Intl.NumberFormat("id-ID",{
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
    return idFormatter.format(amount);
}