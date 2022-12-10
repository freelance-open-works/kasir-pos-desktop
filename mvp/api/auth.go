package api

import (
	"fmt"
	"kasirajapos/mvp/api/response"

	"github.com/go-resty/resty/v2"
)

func (api *Api) Login(username, password string) *response.AuthResponse {
	// go login logic
	authResponse := &response.AuthResponse{}
	url := fmt.Sprintf("%s/v1/login", api.BASE_URL)

	var client = resty.New()

	_, err := client.R().
		EnableTrace().
		SetHeader("Content-Type", "application/json").
		SetBody(fmt.Sprintf(`{"username": "%s", "password": "%s"}`, username, password)).
		SetResult(authResponse).
		Post(url)

	if err != nil {
		fmt.Println(err)
	}

	return authResponse
}
