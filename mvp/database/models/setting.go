package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Setting struct {
	gorm.Model
	ID    string `gorm:"primaryKey"`
	Key   string
	Value string
}

func (setting *Setting) BeforeCreate(tx *gorm.DB) (err error) {
	if setting.ID == "" {
		setting.ID = uuid.New().String()
	}

	return
}
