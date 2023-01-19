package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	ID               string `gorm:"primaryKey"`
	UnitId           string
	SaleUnitId       string
	PurchaseUnitId   string
	CategoryId       string
	StockAccountId   string
	Name             string
	Price            float64
	Cost             float64
	Code             string
	Barcode          string
	LockPurchaseCost int
	LockSalePrice    int
	Description      string
	PointMember      int
	BrandId          string
	NotForSale       int
	CreatedBy        string
	UpdatedBy        string
	DeletedBy        string
	WarehouseId      string
	Stock            float64
	UnitName         string
	CategoryName     string
}

func (product *Product) BeforeCreate(tx *gorm.DB) (err error) {
	if product.ID == "" {
		product.ID = uuid.New().String()
	}

	return
}
