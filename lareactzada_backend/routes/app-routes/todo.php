<?php

Route::get('/web/hello-world/{id}', 'todoController@index');
Route::get('/web/get-todo/{id}', 'todoController@getTodo');