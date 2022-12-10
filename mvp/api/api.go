package api

type Api struct {
	BASE_URL string
}

func NewApi() *Api {
	return &Api{}
}

func (api *Api) SetBaseUrl(url string) {
	api.BASE_URL = url
}
