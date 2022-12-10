package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type SaleItem struct {
	gorm.Model
	ID              string `gorm:"primaryKey"`
	SaleId          string
	ProductId       string
	Quantity        string
	Cost            string
	Price           string
	DiscountAmount  string
	DiscountPercent string
	DiscountTotal   string
	QuantitySend    string
	CreatedBy       string
	UpdatedBy       string
	DeletedBy       string
}

func (saleitem *SaleItem) BeforeCreate(tx *gorm.DB) (err error) {
	if saleitem.ID == "" {
		saleitem.ID = uuid.New().String()
	}

	return
}
