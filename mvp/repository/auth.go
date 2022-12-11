package repository

import (
	"kasirajapos/mvp/database/models"

	isconnect "github.com/alimasyhur/is-connect"
	"golang.org/x/crypto/bcrypt"
)

func (r *Repository) Login(username, password string) *User {
	isSync := false

	if isconnect.IsOnline() {
		if r.bundle.LoginCounter <= 0 {
			isSync = true
		}
		r.bundle.LoginCounter += 1
		// fetch online data and add to user
		resp := r.api.Login(username, password)
		// save to local db
		r.UpdateOrCreateUserFromResponse(resp)
		// update api token
		r.api.SetToken(resp.Authorisation.Token)

		return &User{
			Username:    resp.User.Username,
			Token:       resp.Authorisation.Token,
			WarehouseId: resp.User.WarehouseID,
			Sync:        isSync,
		}
	}

	// get from db
	var user *models.User
	// get user from local db with usernamse
	r.db.Where("username", username).First(&user)
	// check password from local db
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	// check data is valid
	if user != nil && err == nil {
		r.api.SetToken(user.JwtToken)
		return &User{
			Username:    user.Username,
			Token:       user.JwtToken,
			WarehouseId: user.WarehouseId,
			Sync:        isSync,
		}
	}

	return nil
}
