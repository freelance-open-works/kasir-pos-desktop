package main

import (
	"context"
	"fmt"
	"kasirajapos/mvp/api"
	db "kasirajapos/mvp/database"
	"kasirajapos/mvp/database/models"
	"kasirajapos/mvp/repository"

	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gorm.io/gorm"
)

// App struct
type App struct {
	ctx  context.Context
	db   *gorm.DB
	api  *api.Api
	repo *repository.Repository
}

// NewApp creates a new App application struct
func NewApp(r *repository.Repository) *App {
	return &App{
		repo: r,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (app *App) startup(ctx context.Context) {
	app.ctx = ctx
	app.db = db.NewDb(ctx)
	app.api = api.NewApi(ctx)

	app.repo.Setup(app.ctx, app.db, app.api)

	fmt.Println(&app.api)

	// setup base url
	setting := &models.Setting{}
	app.db.Where("key = 'BASE_URL'").Order("created_at desc").Find(setting)
	app.api.SetBaseUrl(setting.Value)
}

func (app *App) GetBaseUrl() string {
	return app.api.BASE_URL
}

func (app *App) SetBaseUrl(url string) {
	app.db.Model(&models.Setting{}).Where("key = 'BASE_URL'").Update("value", url)

	app.api.SetBaseUrl(url)

	runtime.WindowReload(app.ctx)
}
