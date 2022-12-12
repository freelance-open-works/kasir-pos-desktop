package repository

import (
	"kasirajapos/mvp/api/response"
	"kasirajapos/mvp/database/models"
	"kasirajapos/mvp/utils/constants"

	isconnect "github.com/alimasyhur/is-connect"
	"gorm.io/gorm/clause"
)

type User struct {
	EmployeeName string
	Username     string
	Token        string
	WarehouseId  string
	OfficeId     string
	Sync         bool
}

func (r *Repository) UpdateOrCreateUserFromResponseAuth(resp *response.Auth) {
	var counter int64
	r.db.Model(&models.User{}).Where("username", resp.User.Username).
		Count(&counter)

	user := &models.User{
		ID:           resp.User.ID,
		EmployeeName: resp.User.Employee.Name,
		Username:     resp.User.Username,
		Password:     resp.User.Password,
		OfficeId:     resp.User.Employee.OfficeID,
		WarehouseId:  resp.User.WarehouseID,
		JwtToken:     resp.Authorisation.Token,
		CreatedBy:    resp.User.CreatedBy,
		UpdatedBy:    resp.User.UpdatedBy,
		DeletedBy:    resp.User.DeletedBy,
	}

	if counter <= 0 {
		r.db.Create(user)
	} else {
		r.db.Model(user).Updates(user)
	}
}

func (r *Repository) UpdateOrCreateUserFromResponse(resp *response.GetUsers) {
	users := []models.User{}

	for _, p := range resp.Data {
		users = append(users, models.User{
			ID:           p.ID,
			EmployeeName: p.Employee.Name,
			Username:     p.Username,
			Password:     p.Password,
			OfficeId:     p.Employee.OfficeID,
			WarehouseId:  p.WarehouseID,
			CreatedBy:    p.CreatedBy,
			UpdatedBy:    p.UpdatedBy,
			DeletedBy:    p.DeletedBy,
		})
	}

	r.db.Clauses(clause.OnConflict{UpdateAll: true}).Create(users)
}

func (r *Repository) SyncUser() {
	if isconnect.IsOnline() {
		limit := constants.MAX_LIMIT_SYNC
		page := 1
		next := "Sync"

		for next != "" {
			customers := r.api.GetUsers(page, limit)
			r.UpdateOrCreateUserFromResponse(customers)
			next = customers.NextPageURL
			page = page + 1
		}
	}
}
