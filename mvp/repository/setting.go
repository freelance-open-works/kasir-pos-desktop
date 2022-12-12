package repository

import (
	"kasirajapos/mvp/api/response"
	"kasirajapos/mvp/database/models"

	isconnect "github.com/alimasyhur/is-connect"
	"gorm.io/gorm/clause"
)

func (r *Repository) UpdateOrCreateSettingFromResponse(resp []*response.GetSetting) {
	settings := []models.Setting{}

	for _, p := range resp {
		settings = append(settings, models.Setting{
			ID:       p.ID,
			Key:      p.Key,
			Value:    p.Value,
			Type:     p.Type,
			Label:    p.Label,
			Order:    p.Order,
			OfficeId: p.OfficeID,
		})
	}

	r.db.Clauses(clause.OnConflict{UpdateAll: true}).Create(settings)
}

func (r *Repository) SyncSetting() {
	if isconnect.IsOnline() {
		settings := r.api.GetSettings()
		r.UpdateOrCreateSettingFromResponse(settings)
	}
}
