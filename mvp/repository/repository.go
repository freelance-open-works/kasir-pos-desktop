package repository

import (
	"context"
	"kasirajapos/mvp/api"

	isconnect "github.com/alimasyhur/is-connect"
	"github.com/wailsapp/wails/v2/pkg/runtime"
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
		limit := 1
		page := 1
		products := r.api.GetProducts(warehouseId, page, limit)
		next := products.NextPageURL
		r.CreateOrUpdateProductFromResponse(products)

		runtime.EventsEmit(r.ctx, "sync_progrees", []int{products.LastPage, products.CurrentPage})
		for next != "" {
			page = page + 1
			products := r.api.GetProducts(warehouseId, page, limit)
			r.CreateOrUpdateProductFromResponse(products)
			next = products.NextPageURL

			runtime.EventsEmit(r.ctx, "sync_progrees", []int{products.LastPage, products.CurrentPage})
		}
	}
	// hello
}
