package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Sale struct {
	gorm.Model
	ID               string `gorm:"primaryKey"`
	OfficeId         string
	WarehouseId      string
	PaymentTypeId    string
	CustomerId       string
	SaleOrderId      string
	Code             string
	Date             string
	DueDate          string
	Description      string
	ShipmentCost     string
	OrderStatus      string
	PaymentStatus    string
	Amount           string
	DiscountPercents string
	DiscountAmount   string
	DiscountTotal    string
	Note             string
	CreatedBy        string
	UpdatedBy        string
	DeletedBy        string
	IsSync           string
}

func (sale *Sale) BeforeCreate(tx *gorm.DB) (err error) {
	if sale.ID == "" {
		sale.ID = uuid.New().String()
	}

	return
}
