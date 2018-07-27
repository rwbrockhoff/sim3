select * from users
inner join posts
on users.id = posts.author_id
where author_id = $1