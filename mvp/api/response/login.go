package response

import "time"

type AuthResponse struct {
	Status string `json:"status"`
	User   struct {
		ID              string      `json:"id"`
		Email           string      `json:"email"`
		Username        string      `json:"username"`
		Password        string      `json:"password"`
		EmailVerifiedAt interface{} `json:"email_verified_at"`
		JwtToken        string      `json:"jwt_token"`
		IsEnable        int         `json:"is_enable"`
		IsSuperadmin    int         `json:"is_superadmin"`
		EmployeeID      string      `json:"employee_id"`
		RoleID          string      `json:"role_id"`
		Flag            int         `json:"flag"`
		CreatedBy       string      `json:"created_by"`
		UpdatedBy       string      `json:"updated_by"`
		DeletedBy       string      `json:"deleted_by"`
		CreatedAt       time.Time   `json:"created_at"`
		UpdatedAt       time.Time   `json:"updated_at"`
		DeletedAt       interface{} `json:"deleted_at"`
		WarehouseID     string      `json:"warehouse_id"`
		Employee        struct {
			ID           string      `json:"id"`
			Code         string      `json:"code"`
			Name         string      `json:"name"`
			Phone        interface{} `json:"phone"`
			Email        string      `json:"email"`
			Address      interface{} `json:"address"`
			IDNum        interface{} `json:"id_num"`
			StartDate    interface{} `json:"start_date"`
			EndDate      interface{} `json:"end_date"`
			DepartmentID interface{} `json:"department_id"`
			PositionID   interface{} `json:"position_id"`
			OfficeID     string      `json:"office_id"`
			Flag         int         `json:"flag"`
			CreatedBy    interface{} `json:"created_by"`
			UpdatedBy    interface{} `json:"updated_by"`
			DeletedBy    interface{} `json:"deleted_by"`
			CreatedAt    time.Time   `json:"created_at"`
			UpdatedAt    time.Time   `json:"updated_at"`
			DeletedAt    interface{} `json:"deleted_at"`
		} `json:"employee"`
	} `json:"user"`
	Authorisation struct {
		Token string `json:"token"`
		Type  string `json:"type"`
	} `json:"authorisation"`
}
