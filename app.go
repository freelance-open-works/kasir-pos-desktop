package main

import (
	"context"
	"kasirajapos/mvp/api"
	"kasirajapos/mvp/database"
	"kasirajapos/mvp/database/models"

	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gorm.io/gorm"
)

// App struct
type App struct {
	Ctx context.Context
	Db  *gorm.DB
	Api *api.Api
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.Ctx = ctx
	a.Db = database.NewDb(ctx)
	a.Api = api.NewApi()

	// setup base url
	setting := &models.Setting{}
	a.Db.Where("key = 'BASE_URL'").Order("created_at desc").Find(setting)
	a.Api.SetBaseUrl(setting.Value)
}

func (a *App) GetBaseUrl() string {
	return a.Api.BASE_URL
}

func (a *App) SetBaseUrl(url string) {
	// changes db
	a.Db.Model(&models.Setting{}).Where("key = 'BASE_URL'").Update("value", url)
	// change instance
	a.Api.SetBaseUrl(url)
	// reload env
	runtime.WindowReload(a.Ctx)
}
