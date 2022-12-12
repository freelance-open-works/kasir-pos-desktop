package repository

import (
	"context"
	"kasirajapos/mvp/api"
	"kasirajapos/mvp/database/models"

	isconnect "github.com/alimasyhur/is-connect"
	"gorm.io/gorm"
)

type RepositoryBundle struct {
	LoginCounter int
	Settings     map[string]*models.Setting
}

type Repository struct {
	ctx    context.Context
	db     *gorm.DB
	api    *api.Api
	bundle *RepositoryBundle
}

func NewRepository() *Repository {
	return &Repository{}
}

func (r *Repository) Setup(ctx context.Context, db *gorm.DB, api *api.Api) {
	r.ctx = ctx
	r.db = db
	r.api = api
	r.bundle = &RepositoryBundle{}
	r.bundle.Settings = map[string]*models.Setting{}

	// TODO: i want to add scheduler run evert 30 minutes to check server online and sync sale data / all data
}

func (r *Repository) SyncGet(warehouseId string) {
	isreachable, _ := isconnect.IsReachable(r.api.BASE_URL)
	if isreachable {
		go r.SyncSetting()
		go r.SyncUser()
		go r.SyncCustomer()
		go r.SyncProduct(warehouseId)
	}
}
