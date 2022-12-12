package repository

import (
	"kasirajapos/mvp/database/models"

	isconnect "github.com/alimasyhur/is-connect"
	"golang.org/x/crypto/bcrypt"
)

func (r *Repository) Login(username, password string) *User {
	isSync := false

	isreachable, _ := isconnect.IsReachable(r.api.BASE_URL)
	if isreachable {
		if r.bundle.LoginCounter <= 0 {
			isSync = true
		}

		// check server user if valid
		resp := r.api.Login(username, password)
		if resp == nil {
			return nil
		}

		// save to local db
		r.UpdateOrCreateUserFromResponseAuth(resp)

		// update api token
		r.api.SetToken(resp.Authorisation.Token)

		r.bundle.LoginCounter += 1

		return &User{
			EmployeeName: resp.User.Employee.Name,
			Username:     resp.User.Username,
			Token:        resp.Authorisation.Token,
			WarehouseId:  resp.User.WarehouseID,
			OfficeId:     resp.User.Employee.OfficeID,
			Sync:         isSync,
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
			EmployeeName: user.EmployeeName,
			Username:     user.Username,
			Token:        user.JwtToken,
			WarehouseId:  user.WarehouseId,
			OfficeId:     user.OfficeId,
			Sync:         isSync,
		}
	}

	return nil
}
