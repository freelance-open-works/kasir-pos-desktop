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
	Price            string
	Cost             string
	Code             string
	Barcode          string
	LockPurchaseCost string
	LockSalePrice    string
	Description      string
	PointMember      string
	BrandId          string
	NotForSale       string
	CreatedBy        string
	UpdatedBy        string
	DeletedBy        string
}

func (product *Product) BeforeCreate(tx *gorm.DB) (err error) {
	if product.ID == "" {
		product.ID = uuid.New().String()
	}

	return
}
