package repository

import (
	"kasirajapos/mvp/api/response"
	"kasirajapos/mvp/database/models"
)

type User struct {
	Username    string
	Token       string
	WarehouseId string
	Sync        bool
}

func (r *Repository) UpdateOrCreateUserFromResponse(resp *response.Auth) {
	var counter int64
	r.db.Model(&models.User{}).Where("username", resp.User.Username).Count(&counter)

	user := &models.User{
		ID:          resp.User.ID,
		Username:    resp.User.Username,
		Password:    resp.User.Password,
		OfficeId:    resp.User.Employee.OfficeID,
		WarehouseId: resp.User.WarehouseID,
		JwtToken:    resp.Authorisation.Token,
		CreatedBy:   resp.User.CreatedBy,
		UpdatedBy:   resp.User.UpdatedBy,
		DeletedBy:   resp.User.DeletedBy,
	}

	if counter <= 0 {
		r.db.Create(user)
	} else {
		r.db.Model(user).Updates(user)
	}
}
