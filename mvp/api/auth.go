package api

import (
	"fmt"
	"kasirajapos/mvp/api/response"

	"github.com/go-resty/resty/v2"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (api *Api) Login(username, password string) *response.Auth {
	// go login logic
	authResponse := &response.Auth{}
	url := fmt.Sprintf("%s/login", api.BASE_URL)

	var client = resty.New()

	_, err := client.R().
		EnableTrace().
		SetHeader("Content-Type", "application/json").
		SetBody(fmt.Sprintf(`{"username": "%s", "password": "%s"}`, username, password)).
		SetResult(authResponse).
		Post(url)

	if err != nil {
		fmt.Println(err)
		runtime.EventsEmit(api.ctx, "toast_general", "Server Error")
	}

	return authResponse
}
