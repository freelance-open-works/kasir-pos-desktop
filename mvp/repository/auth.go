package repository

import (
	"fmt"

	isconnect "github.com/alimasyhur/is-connect"
)

func (r *Repository) Login() {

	fmt.Println(isconnect.IsOnline())
}
