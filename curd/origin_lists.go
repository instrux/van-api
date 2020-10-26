package curd

import (
	"van-api/helper/res"
)

type OriginLists struct {
	common
	conditions Conditions
	query      Query
	orders     []string
	field      []string
}

func (c *OriginLists) Where(conditions Conditions) *OriginLists {
	c.conditions = conditions
	return c
}

func (c *OriginLists) Query(query Query) *OriginLists {
	c.query = query
	return c
}

func (c *OriginLists) OrderBy(orders []string) *OriginLists {
	c.orders = orders
	return c
}

func (c *OriginLists) Field(field []string) *OriginLists {
	c.field = field
	return c
}

func (c *OriginLists) Result() interface{} {
	var lists []map[string]interface{}
	tx := c.db.Model(c.model)
	conditions := append(c.conditions, c.body.(BodyAPI).GetWhere()...)
	for _, condition := range conditions {
		tx.Where("`"+condition[0].(string)+"` "+condition[1].(string)+" ?", condition[2])
	}
	if c.query != nil {
		c.query(tx)
	}
	orders := append(c.orders, c.body.(BodyAPI).GetOrder()...)
	for _, order := range orders {
		tx.Order(order)
	}
	if len(c.field) != 0 {
		tx.Select(c.field)
	}
	tx.Find(&lists)
	return res.Data(lists)
}
