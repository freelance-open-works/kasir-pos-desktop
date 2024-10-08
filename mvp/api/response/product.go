package response

import "time"

type GetProducts struct {
	CurrentPage int `json:"current_page"`
	Data        []struct {
		ID               string    `json:"id"`
		UnitID           string    `json:"unit_id"`
		SaleUnitID       string    `json:"sale_unit_id"`
		PurchaseUnitID   string    `json:"purchase_unit_id"`
		CategoryID       string    `json:"category_id"`
		StockAccountID   string    `json:"stock_account_id"`
		Name             string    `json:"name"`
		Price            string    `json:"price"`
		Cost             string    `json:"cost"`
		Code             string    `json:"code"`
		Barcode          string    `json:"barcode"`
		LockPurchaseCost int       `json:"lock_purchase_cost"`
		LockSalePrice    int       `json:"lock_sale_price"`
		Description      string    `json:"description"`
		PointMember      int       `json:"point_member"`
		BrandID          string    `json:"brand_id"`
		NotForSale       int       `json:"not_for_sale"`
		Flag             int       `json:"flag"`
		CreatedBy        string    `json:"created_by"`
		UpdatedBy        string    `json:"updated_by"`
		DeletedBy        string    `json:"deleted_by"`
		CreatedAt        time.Time `json:"created_at"`
		UpdatedAt        time.Time `json:"updated_at"`
		DeletedAt        string    `json:"deleted_at"`
		Category         struct {
			ID        string    `json:"id"`
			Code      string    `json:"code"`
			Name      string    `json:"name"`
			ParentID  string    `json:"parent_id"`
			Level     int       `json:"level"`
			Flag      int       `json:"flag"`
			CreatedBy string    `json:"created_by"`
			UpdatedBy string    `json:"updated_by"`
			DeletedBy string    `json:"deleted_by"`
			CreatedAt time.Time `json:"created_at"`
			UpdatedAt time.Time `json:"updated_at"`
			DeletedAt string    `json:"deleted_at"`
		} `json:"category"`
		Unit struct {
			ID            string    `json:"id"`
			Code          string    `json:"code"`
			Name          string    `json:"name"`
			ShortName     string    `json:"short_name"`
			BaseUnitID    string    `json:"base_unit_id"`
			Operator      string    `json:"operator"`
			OperatorValue string    `json:"operator_value"`
			Flag          int       `json:"flag"`
			CreatedBy     string    `json:"created_by"`
			UpdatedBy     string    `json:"updated_by"`
			DeletedBy     string    `json:"deleted_by"`
			CreatedAt     time.Time `json:"created_at"`
			UpdatedAt     time.Time `json:"updated_at"`
			DeletedAt     string    `json:"deleted_at"`
			HumanOperator string    `json:"human_operator"`
		} `json:"unit"`
		Stocks []struct {
			ID             string    `json:"id"`
			ProductID      string    `json:"product_id"`
			WarehouseID    string    `json:"warehouse_id"`
			Stocks         string    `json:"stocks"`
			Purchases      string    `json:"purchases"`
			Sales          string    `json:"sales"`
			SaleOrders     string    `json:"sale_orders"`
			PurchaseOrders string    `json:"purchase_orders"`
			Adjusments     string    `json:"adjusments"`
			CostAverage    string    `json:"cost_average"`
			Flag           int       `json:"flag"`
			CreatedBy      string    `json:"created_by"`
			UpdatedBy      string    `json:"updated_by"`
			DeletedBy      string    `json:"deleted_by"`
			CreatedAt      time.Time `json:"created_at"`
			UpdatedAt      time.Time `json:"updated_at"`
			DeletedAt      string    `json:"deleted_at"`
		} `json:"stocks"`
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
