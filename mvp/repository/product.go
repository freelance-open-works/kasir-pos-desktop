package repository

import (
	"kasirajapos/mvp/api/response"
	"kasirajapos/mvp/database/models"

	"gorm.io/gorm/clause"
)

func (r *Repository) CreateOrUpdateProductFromResponse(resp *response.Product) {
	products := []models.Product{}

	for _, p := range resp.Data {
		warehouseId := ""
		stock := ""

		if len(p.Stocks) > 0 {
			warehouseId = p.Stocks[0].WarehouseID
			stock = p.Stocks[0].StockShow
		}

		products = append(products, models.Product{
			ID:               p.ID,
			UnitId:           p.UnitID,
			SaleUnitId:       p.SaleUnitID,
			PurchaseUnitId:   p.PurchaseUnitID,
			CategoryId:       p.CategoryID,
			StockAccountId:   p.StockAccountID,
			Name:             p.Name,
			Price:            p.PriceShow,
			Cost:             p.CostShow,
			Code:             p.Code,
			Barcode:          p.Barcode,
			LockPurchaseCost: p.LockPurchaseCost,
			LockSalePrice:    p.LockSalePrice,
			Description:      p.Description,
			PointMember:      p.PointMember,
			BrandId:          p.BrandID,
			NotForSale:       p.NotForSale,
			CreatedBy:        p.CreatedBy,
			UpdatedBy:        p.UpdatedBy,
			DeletedBy:        p.DeletedBy,
			WarehouseId:      warehouseId,
			Stock:            stock,
			UnitName:         p.Unit.Name,
			CategoryName:     p.Category.Name,
		})
	}

	r.db.Clauses(clause.OnConflict{UpdateAll: true}).Create(products)
}
