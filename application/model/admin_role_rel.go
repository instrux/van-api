package model

type AdminRoleRel struct {
	ID         uint64
	Username   string     `gorm:"size:30;not null;uniqueIndex:username_role_key_unique"`
	RoleKey    string     `gorm:"size:200;not null;uniqueIndex:username_role_key_unique"`
	AdminBasic AdminBasic `gorm:"foreignKey:Username;references:Username;constraint:OnUpdate:CASCADE,OnDelete:CASCADE"`
	RoleBasic  RoleBasic  `gorm:"foreignKey:RoleKey;references:Key;constraint:OnUpdate:CASCADE,OnDelete:CASCADE"`
}