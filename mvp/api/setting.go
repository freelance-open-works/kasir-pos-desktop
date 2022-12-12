package api

import (
	"fmt"
	"kasirajapos/mvp/api/response"

	"github.com/go-resty/resty/v2"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (api *Api) GetSettings() []*response.GetSetting {
	// go logic
	settings := []*response.GetSetting{}

	url := fmt.Sprintf("%s/settings", api.BASE_URL)

	var client = resty.New()

	_, err := client.R().
		EnableTrace().
		SetHeader("Content-Type", "application/json").
		SetHeader("Authorization", api.TOKEN).
		SetResult(&settings).
		Get(url)

	if err != nil {
		fmt.Println(err)
		runtime.EventsEmit(api.ctx, "toast_general", "Server Error")
	}

	return settings
}
