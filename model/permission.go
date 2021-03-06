package model

type Permission struct {
	ID         uint64     `json:"_id"`
	Key        string     `json:"key"`
	Name       JSONObject `gorm:"type:json" json:"name"`
	Note       string     `json:"note"`
	Status     *bool      `json:"status"`
	CreateTime int64      `gorm:"autoCreateTime" json:"create_time"`
	UpdateTime int64      `gorm:"autoUpdateTime" json:"update_time"`
}
