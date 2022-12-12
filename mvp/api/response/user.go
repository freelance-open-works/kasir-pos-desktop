package response

import "time"

type GetUsers struct {
	CurrentPage int `json:"current_page"`
	Data        []struct {
		ID              string    `json:"id"`
		Email           string    `json:"email"`
		Username        string    `json:"username"`
		EmailVerifiedAt string    `json:"email_verified_at"`
		Password        string    `json:"password"`
		JwtToken        string    `json:"jwt_token"`
		IsEnable        int       `json:"is_enable"`
		IsSuperadmin    int       `json:"is_superadmin"`
		EmployeeID      string    `json:"employee_id"`
		RoleID          string    `json:"role_id"`
		Flag            int       `json:"flag"`
		CreatedBy       string    `json:"created_by"`
		UpdatedBy       string    `json:"updated_by"`
		DeletedBy       string    `json:"deleted_by"`
		CreatedAt       time.Time `json:"created_at"`
		UpdatedAt       time.Time `json:"updated_at"`
		DeletedAt       string    `json:"deleted_at"`
		WarehouseID     string    `json:"warehouse_id"`
		Employee        struct {
			ID           string    `json:"id"`
			Code         string    `json:"code"`
			Name         string    `json:"name"`
			Phone        string    `json:"phone"`
			Email        string    `json:"email"`
			Address      string    `json:"address"`
			IDNum        string    `json:"id_num"`
			StartDate    string    `json:"start_date"`
			EndDate      string    `json:"end_date"`
			DepartmentID string    `json:"department_id"`
			PositionID   string    `json:"position_id"`
			OfficeID     string    `json:"office_id"`
			Flag         int       `json:"flag"`
			CreatedBy    string    `json:"created_by"`
			UpdatedBy    string    `json:"updated_by"`
			DeletedBy    string    `json:"deleted_by"`
			CreatedAt    time.Time `json:"created_at"`
			UpdatedAt    time.Time `json:"updated_at"`
			DeletedAt    string    `json:"deleted_at"`
		} `json:"employee"`
	} `json:"data"`
	FirstPageURL string `json:"first_page_url"`
	From         int    `json:"from"`
	LastPage     int    `json:"last_page"`
	LastPageURL  string `json:"last_page_url"`
	Links        []struct {
		URL    string `json:"url"`
		Label  string `json:"label"`
		Active bool   `json:"active"`
	} `json:"links"`
	NextPageURL string `json:"next_page_url"`
	Path        string `json:"path"`
	PerPage     int    `json:"per_page"`
	PrevPageURL string `json:"prev_page_url"`
	To          int    `json:"to"`
	Total       int    `json:"total"`
}
