package repository

import (
	"fmt"
	"kasirajapos/mvp/api/response"
	"kasirajapos/mvp/database/models"
	"kasirajapos/mvp/utils/constants"

	isconnect "github.com/alimasyhur/is-connect"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gorm.io/gorm/clause"
)

func (r *Repository) CreateOrUpdateProductFromResponse(resp *response.GetProducts) {
	products := []models.Product{}

	for _, p := range resp.Data {
		warehouseId := ""
		stock := ""

		if len(p.Stocks) > 0 {
			warehouseId = p.Stocks[0].WarehouseID
			stock = fmt.Sprintf("%.2f", p.Stocks[0].StockShow)
		}

		products = append(products, models.Product{
			ID:               p.ID,
			UnitId:           p.UnitID,
			SaleUnitId:       p.SaleUnitID,
			PurchaseUnitId:   p.PurchaseUnitID,
			CategoryId:       p.CategoryID,
			StockAccountId:   p.StockAccountID,
			Name:             p.Name,
			Price:            fmt.Sprintf("%.2f", p.PriceShow),
			Cost:             fmt.Sprintf("%.2f", p.CostShow),
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

func (r *Repository) SyncProduct(warehouseId string) {
	isreachable, _ := isconnect.IsReachable(r.api.BASE_URL)
	if isreachable {
		limit := constants.MAX_LIMIT_SYNC
		page := 1
		next := "Sync"

		for next != "" {
			products := r.api.GetProducts(warehouseId, page, limit)
			r.CreateOrUpdateProductFromResponse(products)
			next = products.NextPageURL
			page = page + 1

			runtime.EventsEmit(r.ctx, "sync_progress", []any{
				"Barang", products.CurrentPage, products.LastPage,
			})
		}
	}
}
func (r *Repository) GetProductByNameOrBarcode(name, barcode string, limit, offset int) []*models.Product {
	dataproduct := []*models.Product{}
	db := r.db.Where("Name like ?", "%"+name+"%")
	if barcode != "" {
		db.Or("Barcode like ? ", "%"+barcode+"%")
	}
	db.Limit(limit).
		Offset(offset).
		Find(&dataproduct)

	return dataproduct
}
