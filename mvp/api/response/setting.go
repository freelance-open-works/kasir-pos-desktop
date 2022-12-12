package response

type GetSetting struct {
	ID        string `json:"id"`
	Type      string `json:"type"`
	Label     string `json:"label"`
	Order     string `json:"order"`
	Key       string `json:"key"`
	Value     string `json:"value"`
	OfficeID  string `json:"office_id"`
	Flag      int    `json:"flag"`
	CreatedBy string `json:"created_by"`
	UpdatedBy string `json:"updated_by"`
	DeletedBy string `json:"deleted_by"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
	DeletedAt string `json:"deleted_at"`
}
