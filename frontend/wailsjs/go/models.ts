export namespace response {
	
	export class  {
	    token: string;
	    type: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.token = source["token"];
	        this.type = source["type"];
	    }
	}
	export class Auth {
	    status: string;
	    // Go type: struct { ID string "json:\"id\""; Email string "json:\"email\""; Username string "json:\"username\""; Password string "json:\"password\""; EmailVerifiedAt interface {} "json:\"email_verified_at\""; JwtToken string "json:\"jwt_token\""; IsEnable int "json:\"is_enable\""; IsSuperadmin int "json:\"is_superadmin\""; EmployeeID string "json:\"employee_id\""; RoleID string "json:\"role_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt interface {} "json:\"deleted_at\""; WarehouseID string "json:\"warehouse_id\""; Employee struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone interface {} "json:\"phone\""; Email string "json:\"email\""; Address interface {} "json:\"address\""; IDNum interface {} "json:\"id_num\""; StartDate interface {} "json:\"start_date\""; EndDate interface {} "json:\"end_date\""; DepartmentID interface {} "json:\"department_id\""; PositionID interface {} "json:\"position_id\""; OfficeID string "json:\"office_id\""; Flag int "json:\"flag\""; CreatedBy interface {} "json:\"created_by\""; UpdatedBy interface {} "json:\"updated_by\""; DeletedBy interface {} "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt interface {} "json:\"deleted_at\"" } "json:\"employee\"" }
	    user: any;
	    // Go type: struct { Token string "json:\"token\""; Type string "json:\"type\"" }
	    authorisation: any;
	
	    static createFrom(source: any = {}) {
	        return new Auth(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.status = source["status"];
	        this.user = this.convertValues(source["user"], null);
	        this.authorisation = this.convertValues(source["authorisation"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class  {
	    url: string;
	    label: string;
	    active: boolean;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.url = source["url"];
	        this.label = source["label"];
	        this.active = source["active"];
	    }
	}
	export class GetCustomers {
	    current_page: number;
	    data: struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone string "json:\"phone\""; Email string "json:\"email\""; Address string "json:\"address\""; IsMember int "json:\"is_member\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" }[];
	    first_page_url: string;
	    from: number;
	    last_page: number;
	    last_page_url: string;
	    links: [];
	    next_page_url: string;
	    path: string;
	    per_page: number;
	    prev_page_url: string;
	    to: number;
	    total: number;
	
	    static createFrom(source: any = {}) {
	        return new GetCustomers(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.current_page = source["current_page"];
	        this.data = this.convertValues(source["data"], struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone string "json:\"phone\""; Email string "json:\"email\""; Address string "json:\"address\""; IsMember int "json:\"is_member\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" });
	        this.first_page_url = source["first_page_url"];
	        this.from = source["from"];
	        this.last_page = source["last_page"];
	        this.last_page_url = source["last_page_url"];
	        this.links = this.convertValues(source["links"], );
	        this.next_page_url = source["next_page_url"];
	        this.path = source["path"];
	        this.per_page = source["per_page"];
	        this.prev_page_url = source["prev_page_url"];
	        this.to = source["to"];
	        this.total = source["total"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GetProducts {
	    current_page: number;
	    data: struct { ID string "json:\"id\""; UnitID string "json:\"unit_id\""; SaleUnitID string "json:\"sale_unit_id\""; PurchaseUnitID string "json:\"purchase_unit_id\""; CategoryID string "json:\"category_id\""; StockAccountID string "json:\"stock_account_id\""; Name string "json:\"name\""; Price string "json:\"price\""; Cost string "json:\"cost\""; Code string "json:\"code\""; Barcode string "json:\"barcode\""; LockPurchaseCost int "json:\"lock_purchase_cost\""; LockSalePrice int "json:\"lock_sale_price\""; Description string "json:\"description\""; PointMember int "json:\"point_member\""; BrandID string "json:\"brand_id\""; NotForSale int "json:\"not_for_sale\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\""; Category struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; ParentID string "json:\"parent_id\""; Level int "json:\"level\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" } "json:\"category\""; Unit struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; ShortName string "json:\"short_name\""; BaseUnitID string "json:\"base_unit_id\""; Operator string "json:\"operator\""; OperatorValue string "json:\"operator_value\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\""; HumanOperator string "json:\"human_operator\"" } "json:\"unit\""; Stocks []struct { ID string "json:\"id\""; ProductID string "json:\"product_id\""; WarehouseID string "json:\"warehouse_id\""; Stocks string "json:\"stocks\""; Purchases string "json:\"purchases\""; Sales string "json:\"sales\""; SaleOrders string "json:\"sale_orders\""; PurchaseOrders string "json:\"purchase_orders\""; Adjusments string "json:\"adjusments\""; CostAverage string "json:\"cost_average\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" } "json:\"stocks\"" }[];
	    first_page_url: string;
	    from: number;
	    last_page: number;
	    last_page_url: string;
	    links: [];
	    next_page_url: string;
	    path: string;
	    per_page: number;
	    prev_page_url: string;
	    to: number;
	    total: number;
	
	    static createFrom(source: any = {}) {
	        return new GetProducts(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.current_page = source["current_page"];
	        this.data = this.convertValues(source["data"], struct { ID string "json:\"id\""; UnitID string "json:\"unit_id\""; SaleUnitID string "json:\"sale_unit_id\""; PurchaseUnitID string "json:\"purchase_unit_id\""; CategoryID string "json:\"category_id\""; StockAccountID string "json:\"stock_account_id\""; Name string "json:\"name\""; Price string "json:\"price\""; Cost string "json:\"cost\""; Code string "json:\"code\""; Barcode string "json:\"barcode\""; LockPurchaseCost int "json:\"lock_purchase_cost\""; LockSalePrice int "json:\"lock_sale_price\""; Description string "json:\"description\""; PointMember int "json:\"point_member\""; BrandID string "json:\"brand_id\""; NotForSale int "json:\"not_for_sale\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\""; Category struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; ParentID string "json:\"parent_id\""; Level int "json:\"level\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" } "json:\"category\""; Unit struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; ShortName string "json:\"short_name\""; BaseUnitID string "json:\"base_unit_id\""; Operator string "json:\"operator\""; OperatorValue string "json:\"operator_value\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\""; HumanOperator string "json:\"human_operator\"" } "json:\"unit\""; Stocks []struct { ID string "json:\"id\""; ProductID string "json:\"product_id\""; WarehouseID string "json:\"warehouse_id\""; Stocks string "json:\"stocks\""; Purchases string "json:\"purchases\""; Sales string "json:\"sales\""; SaleOrders string "json:\"sale_orders\""; PurchaseOrders string "json:\"purchase_orders\""; Adjusments string "json:\"adjusments\""; CostAverage string "json:\"cost_average\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" } "json:\"stocks\"" });
	        this.first_page_url = source["first_page_url"];
	        this.from = source["from"];
	        this.last_page = source["last_page"];
	        this.last_page_url = source["last_page_url"];
	        this.links = this.convertValues(source["links"], );
	        this.next_page_url = source["next_page_url"];
	        this.path = source["path"];
	        this.per_page = source["per_page"];
	        this.prev_page_url = source["prev_page_url"];
	        this.to = source["to"];
	        this.total = source["total"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GetSetting {
	    id: string;
	    type: string;
	    label: string;
	    order: string;
	    key: string;
	    value: string;
	    office_id: string;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    created_at: string;
	    updated_at: string;
	    deleted_at: string;
	
	    static createFrom(source: any = {}) {
	        return new GetSetting(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.type = source["type"];
	        this.label = source["label"];
	        this.order = source["order"];
	        this.key = source["key"];
	        this.value = source["value"];
	        this.office_id = source["office_id"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = source["created_at"];
	        this.updated_at = source["updated_at"];
	        this.deleted_at = source["deleted_at"];
	    }
	}
	export class GetUsers {
	    current_page: number;
	    data: struct { ID string "json:\"id\""; Email string "json:\"email\""; Username string "json:\"username\""; EmailVerifiedAt string "json:\"email_verified_at\""; Password string "json:\"password\""; JwtToken string "json:\"jwt_token\""; IsEnable int "json:\"is_enable\""; IsSuperadmin int "json:\"is_superadmin\""; EmployeeID string "json:\"employee_id\""; RoleID string "json:\"role_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\""; WarehouseID string "json:\"warehouse_id\""; Employee struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone string "json:\"phone\""; Email string "json:\"email\""; Address string "json:\"address\""; IDNum string "json:\"id_num\""; StartDate string "json:\"start_date\""; EndDate string "json:\"end_date\""; DepartmentID string "json:\"department_id\""; PositionID string "json:\"position_id\""; OfficeID string "json:\"office_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" } "json:\"employee\"" }[];
	    first_page_url: string;
	    from: number;
	    last_page: number;
	    last_page_url: string;
	    links: [];
	    next_page_url: string;
	    path: string;
	    per_page: number;
	    prev_page_url: string;
	    to: number;
	    total: number;
	
	    static createFrom(source: any = {}) {
	        return new GetUsers(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.current_page = source["current_page"];
	        this.data = this.convertValues(source["data"], struct { ID string "json:\"id\""; Email string "json:\"email\""; Username string "json:\"username\""; EmailVerifiedAt string "json:\"email_verified_at\""; Password string "json:\"password\""; JwtToken string "json:\"jwt_token\""; IsEnable int "json:\"is_enable\""; IsSuperadmin int "json:\"is_superadmin\""; EmployeeID string "json:\"employee_id\""; RoleID string "json:\"role_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\""; WarehouseID string "json:\"warehouse_id\""; Employee struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone string "json:\"phone\""; Email string "json:\"email\""; Address string "json:\"address\""; IDNum string "json:\"id_num\""; StartDate string "json:\"start_date\""; EndDate string "json:\"end_date\""; DepartmentID string "json:\"department_id\""; PositionID string "json:\"position_id\""; OfficeID string "json:\"office_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" } "json:\"employee\"" });
	        this.first_page_url = source["first_page_url"];
	        this.from = source["from"];
	        this.last_page = source["last_page"];
	        this.last_page_url = source["last_page_url"];
	        this.links = this.convertValues(source["links"], );
	        this.next_page_url = source["next_page_url"];
	        this.path = source["path"];
	        this.per_page = source["per_page"];
	        this.prev_page_url = source["prev_page_url"];
	        this.to = source["to"];
	        this.total = source["total"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; ParentID string "json:\"parent_id\""; Level int "json:\"level\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    code: string;
	    name: string;
	    parent_id: string;
	    level: number;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.code = source["code"];
	        this.name = source["name"];
	        this.parent_id = source["parent_id"];
	        this.level = source["level"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone interface {} "json:\"phone\""; Email string "json:\"email\""; Address interface {} "json:\"address\""; IDNum interface {} "json:\"id_num\""; StartDate interface {} "json:\"start_date\""; EndDate interface {} "json:\"end_date\""; DepartmentID interface {} "json:\"department_id\""; PositionID interface {} "json:\"position_id\""; OfficeID string "json:\"office_id\""; Flag int "json:\"flag\""; CreatedBy interface {} "json:\"created_by\""; UpdatedBy interface {} "json:\"updated_by\""; DeletedBy interface {} "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    code: string;
	    name: string;
	    phone: any;
	    email: string;
	    address: any;
	    id_num: any;
	    start_date: any;
	    end_date: any;
	    department_id: any;
	    position_id: any;
	    office_id: string;
	    flag: number;
	    created_by: any;
	    updated_by: any;
	    deleted_by: any;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: any;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.code = source["code"];
	        this.name = source["name"];
	        this.phone = source["phone"];
	        this.email = source["email"];
	        this.address = source["address"];
	        this.id_num = source["id_num"];
	        this.start_date = source["start_date"];
	        this.end_date = source["end_date"];
	        this.department_id = source["department_id"];
	        this.position_id = source["position_id"];
	        this.office_id = source["office_id"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone string "json:\"phone\""; Email string "json:\"email\""; Address string "json:\"address\""; IDNum string "json:\"id_num\""; StartDate string "json:\"start_date\""; EndDate string "json:\"end_date\""; DepartmentID string "json:\"department_id\""; PositionID string "json:\"position_id\""; OfficeID string "json:\"office_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    code: string;
	    name: string;
	    phone: string;
	    email: string;
	    address: string;
	    id_num: string;
	    start_date: string;
	    end_date: string;
	    department_id: string;
	    position_id: string;
	    office_id: string;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.code = source["code"];
	        this.name = source["name"];
	        this.phone = source["phone"];
	        this.email = source["email"];
	        this.address = source["address"];
	        this.id_num = source["id_num"];
	        this.start_date = source["start_date"];
	        this.end_date = source["end_date"];
	        this.department_id = source["department_id"];
	        this.position_id = source["position_id"];
	        this.office_id = source["office_id"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone string "json:\"phone\""; Email string "json:\"email\""; Address string "json:\"address\""; IsMember int "json:\"is_member\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    code: string;
	    name: string;
	    phone: string;
	    email: string;
	    address: string;
	    is_member: number;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.code = source["code"];
	        this.name = source["name"];
	        this.phone = source["phone"];
	        this.email = source["email"];
	        this.address = source["address"];
	        this.is_member = source["is_member"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; ShortName string "json:\"short_name\""; BaseUnitID string "json:\"base_unit_id\""; Operator string "json:\"operator\""; OperatorValue string "json:\"operator_value\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    code: string;
	    name: string;
	    short_name: string;
	    base_unit_id: string;
	    operator: string;
	    operator_value: string;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: string;
	    human_operator: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.code = source["code"];
	        this.name = source["name"];
	        this.short_name = source["short_name"];
	        this.base_unit_id = source["base_unit_id"];
	        this.operator = source["operator"];
	        this.operator_value = source["operator_value"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	        this.human_operator = source["human_operator"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; Email string "json:\"email\""; Username string "json:\"username\""; EmailVerifiedAt string "json:\"email_verified_at\""; Password string "json:\"password\""; JwtToken string "json:\"jwt_token\""; IsEnable int "json:\"is_enable\""; IsSuperadmin int "json:\"is_superadmin\""; EmployeeID string "json:\"employee_id\""; RoleID string "json:\"role_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    email: string;
	    username: string;
	    email_verified_at: string;
	    password: string;
	    jwt_token: string;
	    is_enable: number;
	    is_superadmin: number;
	    employee_id: string;
	    role_id: string;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: string;
	    warehouse_id: string;
	    // Go type: struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone string "json:\"phone\""; Email string "json:\"email\""; Address string "json:\"address\""; IDNum string "json:\"id_num\""; StartDate string "json:\"start_date\""; EndDate string "json:\"end_date\""; DepartmentID string "json:\"department_id\""; PositionID string "json:\"position_id\""; OfficeID string "json:\"office_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" }
	    employee: any;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.email = source["email"];
	        this.username = source["username"];
	        this.email_verified_at = source["email_verified_at"];
	        this.password = source["password"];
	        this.jwt_token = source["jwt_token"];
	        this.is_enable = source["is_enable"];
	        this.is_superadmin = source["is_superadmin"];
	        this.employee_id = source["employee_id"];
	        this.role_id = source["role_id"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	        this.warehouse_id = source["warehouse_id"];
	        this.employee = this.convertValues(source["employee"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; Email string "json:\"email\""; Username string "json:\"username\""; Password string "json:\"password\""; EmailVerifiedAt interface {} "json:\"email_verified_at\""; JwtToken string "json:\"jwt_token\""; IsEnable int "json:\"is_enable\""; IsSuperadmin int "json:\"is_superadmin\""; EmployeeID string "json:\"employee_id\""; RoleID string "json:\"role_id\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    email: string;
	    username: string;
	    password: string;
	    email_verified_at: any;
	    jwt_token: string;
	    is_enable: number;
	    is_superadmin: number;
	    employee_id: string;
	    role_id: string;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: any;
	    warehouse_id: string;
	    // Go type: struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; Phone interface {} "json:\"phone\""; Email string "json:\"email\""; Address interface {} "json:\"address\""; IDNum interface {} "json:\"id_num\""; StartDate interface {} "json:\"start_date\""; EndDate interface {} "json:\"end_date\""; DepartmentID interface {} "json:\"department_id\""; PositionID interface {} "json:\"position_id\""; OfficeID string "json:\"office_id\""; Flag int "json:\"flag\""; CreatedBy interface {} "json:\"created_by\""; UpdatedBy interface {} "json:\"updated_by\""; DeletedBy interface {} "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt interface {} "json:\"deleted_at\"" }
	    employee: any;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.email = source["email"];
	        this.username = source["username"];
	        this.password = source["password"];
	        this.email_verified_at = source["email_verified_at"];
	        this.jwt_token = source["jwt_token"];
	        this.is_enable = source["is_enable"];
	        this.is_superadmin = source["is_superadmin"];
	        this.employee_id = source["employee_id"];
	        this.role_id = source["role_id"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	        this.warehouse_id = source["warehouse_id"];
	        this.employee = this.convertValues(source["employee"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; ProductID string "json:\"product_id\""; WarehouseID string "json:\"warehouse_id\""; Stocks string "json:\"stocks\""; Purchases string "json:\"purchases\""; Sales string "json:\"sales\""; SaleOrders string "json:\"sale_orders\""; PurchaseOrders string "json:\"purchase_orders\""; Adjusments string "json:\"adjusments\""; CostAverage string "json:\"cost_average\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    product_id: string;
	    warehouse_id: string;
	    stocks: string;
	    purchases: string;
	    sales: string;
	    sale_orders: string;
	    purchase_orders: string;
	    adjusments: string;
	    cost_average: string;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.product_id = source["product_id"];
	        this.warehouse_id = source["warehouse_id"];
	        this.stocks = source["stocks"];
	        this.purchases = source["purchases"];
	        this.sales = source["sales"];
	        this.sale_orders = source["sale_orders"];
	        this.purchase_orders = source["purchase_orders"];
	        this.adjusments = source["adjusments"];
	        this.cost_average = source["cost_average"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace struct { ID string "json:\"id\""; UnitID string "json:\"unit_id\""; SaleUnitID string "json:\"sale_unit_id\""; PurchaseUnitID string "json:\"purchase_unit_id\""; CategoryID string "json:\"category_id\""; StockAccountID string "json:\"stock_account_id\""; Name string "json:\"name\""; Price string "json:\"price\""; Cost string "json:\"cost\""; Code string "json:\"code\""; Barcode string "json:\"barcode\""; LockPurchaseCost int "json:\"lock_purchase_cost\""; LockSalePrice int "json:\"lock_sale_price\""; Description string "json:\"description\""; PointMember int "json:\"point_member\""; BrandID string "json:\"brand_id\""; NotForSale int "json:\"not_for_sale\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time {
	
	export class  {
	    id: string;
	    unit_id: string;
	    sale_unit_id: string;
	    purchase_unit_id: string;
	    category_id: string;
	    stock_account_id: string;
	    name: string;
	    price: string;
	    cost: string;
	    code: string;
	    barcode: string;
	    lock_purchase_cost: number;
	    lock_sale_price: number;
	    description: string;
	    point_member: number;
	    brand_id: string;
	    not_for_sale: number;
	    flag: number;
	    created_by: string;
	    updated_by: string;
	    deleted_by: string;
	    // Go type: time.Time
	    created_at: any;
	    // Go type: time.Time
	    updated_at: any;
	    deleted_at: string;
	    // Go type: struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; ParentID string "json:\"parent_id\""; Level int "json:\"level\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" }
	    category: any;
	    // Go type: struct { ID string "json:\"id\""; Code string "json:\"code\""; Name string "json:\"name\""; ShortName string "json:\"short_name\""; BaseUnitID string "json:\"base_unit_id\""; Operator string "json:\"operator\""; OperatorValue string "json:\"operator_value\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\""; HumanOperator string "json:\"human_operator\"" }
	    unit: any;
	    stocks: struct { ID string "json:\"id\""; ProductID string "json:\"product_id\""; WarehouseID string "json:\"warehouse_id\""; Stocks string "json:\"stocks\""; Purchases string "json:\"purchases\""; Sales string "json:\"sales\""; SaleOrders string "json:\"sale_orders\""; PurchaseOrders string "json:\"purchase_orders\""; Adjusments string "json:\"adjusments\""; CostAverage string "json:\"cost_average\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" }[];
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.unit_id = source["unit_id"];
	        this.sale_unit_id = source["sale_unit_id"];
	        this.purchase_unit_id = source["purchase_unit_id"];
	        this.category_id = source["category_id"];
	        this.stock_account_id = source["stock_account_id"];
	        this.name = source["name"];
	        this.price = source["price"];
	        this.cost = source["cost"];
	        this.code = source["code"];
	        this.barcode = source["barcode"];
	        this.lock_purchase_cost = source["lock_purchase_cost"];
	        this.lock_sale_price = source["lock_sale_price"];
	        this.description = source["description"];
	        this.point_member = source["point_member"];
	        this.brand_id = source["brand_id"];
	        this.not_for_sale = source["not_for_sale"];
	        this.flag = source["flag"];
	        this.created_by = source["created_by"];
	        this.updated_by = source["updated_by"];
	        this.deleted_by = source["deleted_by"];
	        this.created_at = this.convertValues(source["created_at"], null);
	        this.updated_at = this.convertValues(source["updated_at"], null);
	        this.deleted_at = source["deleted_at"];
	        this.category = this.convertValues(source["category"], null);
	        this.unit = this.convertValues(source["unit"], null);
	        this.stocks = this.convertValues(source["stocks"], struct { ID string "json:\"id\""; ProductID string "json:\"product_id\""; WarehouseID string "json:\"warehouse_id\""; Stocks string "json:\"stocks\""; Purchases string "json:\"purchases\""; Sales string "json:\"sales\""; SaleOrders string "json:\"sale_orders\""; PurchaseOrders string "json:\"purchase_orders\""; Adjusments string "json:\"adjusments\""; CostAverage string "json:\"cost_average\""; Flag int "json:\"flag\""; CreatedBy string "json:\"created_by\""; UpdatedBy string "json:\"updated_by\""; DeletedBy string "json:\"deleted_by\""; CreatedAt time.Time "json:\"created_at\""; UpdatedAt time.Time "json:\"updated_at\""; DeletedAt string "json:\"deleted_at\"" });
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

