<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

use Carbon\Carbon;
use Session;

class Todo extends Model {

  protected $table = 'todo';

  protected $fillable = ['user_id', 'todo_type_id', 'todo_title', 'todo_content', 'completed','updated_at','created_at'];

  protected $primaryKey = 'todo_id';

  public function getTodo ($userId) {
    $todo = DB::table($this->table)
    ->where('user_id', $userId)
    ->get()
    ->all();
    return $todo;
  }

    public function addTask($taskObject){
      $result = DB::table($this->table)
      ->insertGetId([
        'user_id' => $taskObject->user_id,
        'todo_type_id'=> $taskObject->todo_type_id,
        'todo_title' => $taskObject->todo_title,
        'todo_content' => $taskObject->todo_content,
        'completed' => $taskObject->completed,
        'updated_at' => Carbon::now("Asia/Manila"),
        'created_at' => Carbon::now("Asia/Manila")
    ]);

    return $result;
  }

  public function updateTasks($taskObject){
    DB::table($this->table)
    ->where('todo_id', $taskObject->todo_id)
    ->update([
      'completed' => $taskObject->completed,
      'updated_at'=> Carbon::now("Asia/Manila")
    ]);

    return 'ok';
  }

}