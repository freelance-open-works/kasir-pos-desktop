package api

import (
	"fmt"
	"kasirajapos/mvp/api/response"

	"github.com/go-resty/resty/v2"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (api *Api) GetProducts(warehouseId string, page, limit int) *response.Product {
	// go logic
	products := &response.Product{}
	url := fmt.Sprintf("%s/products?warehouse_id=%s&page=%d&limit=%d", api.BASE_URL, warehouseId, page, limit)

	fmt.Println(url)

	var client = resty.New()

	res, err := client.R().
		EnableTrace().
		SetHeader("Content-Type", "application/json").
		SetHeader("Authorization", api.TOKEN).
		SetResult(products).
		Get(url)
	fmt.Println(res)
	if err != nil {
		fmt.Println(err)
		runtime.EventsEmit(api.ctx, "toast_general", "Server Error")
	}

	return products
}
