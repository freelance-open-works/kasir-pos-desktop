package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID          string `gorm:"primaryKey"`
	Username    string
	Password    string
	OfficeId    string
	WarehouseId string
	JwtToken    string
	CreatedBy   string
	UpdatedBy   string
	DeletedBy   string
}

func (user *User) BeforeCreate(tx *gorm.DB) (err error) {
	if user.ID == "" {
		user.ID = uuid.New().String()
	}

	return
}
