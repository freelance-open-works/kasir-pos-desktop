package models

import "gorm.io/gorm"

type Customer struct {
	gorm.Model
	ID       string `gorm:"primaryKey"`
	Code     string
	Name     string
	Phone    string
	Email    string
	Address  string
	IsMember string
}
