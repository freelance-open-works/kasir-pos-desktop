package repository

import (
	"context"
	"kasirajapos/mvp/api"

	"gorm.io/gorm"
)

type Repository struct {
	Ctx *context.Context
	Db  *gorm.DB
	Api *api.Api
}

func NewRepository(ctx *context.Context, db *gorm.DB, api *api.Api) *Repository {
	return &Repository{
		Ctx: ctx,
		Db:  db,
		Api: api,
	}
}
