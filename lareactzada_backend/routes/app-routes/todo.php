<?php

Route::get('/web/hello-world/{id}', 'todoController@index');
Route::get('/web/get-todo/{id}', 'todoController@getTodo');
Route::post('/web/add-todo', 'todoController@addTask');
Route::post('/web/update-todo', 'todoController@updateTasks');