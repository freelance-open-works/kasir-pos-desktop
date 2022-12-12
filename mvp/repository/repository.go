package repository

import (
	"context"
	"kasirajapos/mvp/api"

	isconnect "github.com/alimasyhur/is-connect"
	"gorm.io/gorm"
)

type RepositoryBundle struct {
	LoginCounter int
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
}

func (r *Repository) SyncGet(warehouseId string) {
	if isconnect.IsOnline() {
		go r.SyncSetting()
		go r.SyncUser()
		go r.SyncCustomer()
		go r.SyncProduct(warehouseId)
	}
}
