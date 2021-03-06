package model

type Admin struct {
	ID         uint64 `json:"_id"`
	Username   string `json:"username"`
	Password   string `json:"password"`
	Permission Array  `json:"permission"`
	Name       string `json:"name"`
	Email      string `json:"email"`
	Phone      string `json:"phone"`
	Avatar     string `json:"avatar"`
	Status     *bool  `json:"status"`
	CreateTime int64  `gorm:"autoCreateTime" json:"create_time"`
	UpdateTime int64  `gorm:"autoUpdateTime" json:"update_time"`
}
