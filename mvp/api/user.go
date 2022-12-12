package api

import (
	"fmt"
	"kasirajapos/mvp/api/response"

	"github.com/go-resty/resty/v2"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (api *Api) GetUsers(page, limit int) *response.GetUsers {
	// go logic
	users := &response.GetUsers{}

	url := fmt.Sprintf("%s/users?&page=%d&limit=%d", api.BASE_URL, page, limit)

	var client = resty.New()

	_, err := client.R().
		EnableTrace().
		SetHeader("Content-Type", "application/json").
		SetHeader("Authorization", api.TOKEN).
		SetResult(users).
		Get(url)

	if err != nil {
		fmt.Println(err)
		runtime.EventsEmit(api.ctx, "toast_general", "Server Error")
	}

	return users
}
