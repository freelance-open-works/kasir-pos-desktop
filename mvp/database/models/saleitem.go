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
	Cost            float64
	Price           float64
	DiscountAmount  float64
	DiscountPercent float64
	DiscountTotal   float64
	QuantitySend    float64
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
