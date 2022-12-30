package database

import (
	"context"
	"kasirajapos/mvp/database/models"
	"kasirajapos/mvp/utils/constants"

	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

const DATABASE = ".kasirajaposdesktop.db"

func NewDb(ctx context.Context) *gorm.DB {
	db, err := gorm.Open(sqlite.Open(DATABASE), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		runtime.LogDebug(ctx, "DB CONNECT ERROR")
		return nil
	}

	migrate(db)
	seed(db)

	return db
}

func migrate(db *gorm.DB) {
	// migrate
	db.AutoMigrate(&models.User{})
	db.AutoMigrate(&models.Product{})
	db.AutoMigrate(&models.Customer{})
	db.AutoMigrate(&models.Sale{})
	db.AutoMigrate(&models.SaleItem{})
	db.AutoMigrate(&models.Setting{})
}

func seed(db *gorm.DB) {
	// seed
	var counter int64
	db.Model(&models.Setting{}).Count(&counter)

	if counter <= 0 {
		db.Create(&models.Setting{
			Key:   "BASE_URL",
			Value: constants.DEFAULT_BASE_URL,
		})
	}
}
