package api

import (
	"context"
	"fmt"
)

type Api struct {
	ctx      context.Context
	BASE_URL string
	TOKEN    string
}

func NewApi(ctx context.Context) *Api {
	return &Api{
		ctx: ctx,
	}
}

func (api *Api) SetBaseUrl(url string) {
	api.BASE_URL = url
}

func (api *Api) SetToken(token string) {
	api.TOKEN = fmt.Sprintf("Bearer %s", token)
}
