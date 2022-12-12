package repository

import (
	"kasirajapos/mvp/api/response"
	"kasirajapos/mvp/database/models"
	"kasirajapos/mvp/utils/constants"
	"strconv"

	isconnect "github.com/alimasyhur/is-connect"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gorm.io/gorm/clause"
)

func (r *Repository) CreateOrUpdateCustomerFromResponse(resp *response.GetCustomers) {
	customers := []models.Customer{}

	for _, p := range resp.Data {
		customers = append(customers, models.Customer{
			ID:       p.ID,
			Code:     p.Code,
			Name:     p.Name,
			Phone:    p.Phone,
			Email:    p.Email,
			Address:  p.Address,
			IsMember: strconv.Itoa(p.IsMember),
		})
	}

	r.db.Clauses(clause.OnConflict{UpdateAll: true}).Create(customers)
}

func (r *Repository) SyncCustomer() {
	isreachable, _ := isconnect.IsReachable(r.api.BASE_URL)
	if isreachable {
		limit := constants.MAX_LIMIT_SYNC
		page := 1
		next := "Sync"

		for next != "" {
			customers := r.api.GetCustomers(page, limit)
			r.CreateOrUpdateCustomerFromResponse(customers)
			next = customers.NextPageURL
			page = page + 1

			runtime.EventsEmit(r.ctx, "sync_progress", []any{
				"Pelanggan", customers.CurrentPage, customers.LastPage,
			})
		}

	}
}
