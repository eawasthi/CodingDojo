select * from customer;

select city.city_id, city.city, customer.first_name, customer.last_name, customer.email, address.address
from customer
join address on address.address_id = customer.address_id
join city on city.city_id = address.city_id
where city.city_id = 312;

select film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name
from film
join film_category on film_category.film_id = film.film_id
join category on category.category_id = film_category.category_id
where category.name = 'comedy';



select film_actor.actor_id, film.film_id, film.title, film.description, film.release_year
from film
join film_actor on film_actor.film_id = film.film_id
join actor on actor.actor_id =  film_actor.actor_id
where actor.actor_id = 5;
select store.store_id,  city.city_id, customer.first_name, customer.last_name, customer.email, address.address

select * from customer
right join store on store.store_id = customer.store_id
right join address on address.address_id = store.address_id
right join city on city.city_id = address.city_id
where store.store_id = 1; 
select * from address;
select * from address
where city_id = 42;
select * from city
where city_id = 42;
select * from store
where store_id = 1;

join address on address.address_id = store.address_id
join city on city.city_id = address.city_id;

select  film.title,film.description, film.rating, film.special_features from film
right join film_actor on film_actor.film_id = film.film_id
where film.rating= 'G' and film.special_features= 'Behind the Scenes';

select  * from film
right join film_actor on film_actor.film_id = film.film_id
right join actor on actor.actor_id=film_actor.actor_id
where film.film_id=369;


select  film.title,film.description, film.rating, film.special_features from film 
right join film_category on film_category.film_id  = film.film_id
right join category on category.category_id = film_category.category_id
where rental_rate=2.99;



select actor.actor_id, actor.first_name, actor.last_name,  film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name from film
right join film_category on film_category.film_id=film.film_idfilm_idcategory_idfilm_idname
right join category on category.category_id=film_category.category_id
right join film_actor on film_actor.film_id=film.film_id
right join actor on actor.actor_id=film_actor.actor_id
where category.name="action" and actor.first_name="SANDRA" and actor.last_name="KILMER" ;