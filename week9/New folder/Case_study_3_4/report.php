select sum(revenue), product_id, date from sales group by product_id order by sum(revenue);
select sum(quantity), type as category from sales WHERE DATE(date) = CURDATE() group by type order by sum(quantity);
