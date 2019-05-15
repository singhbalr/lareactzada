<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

use Carbon\Carbon;
use Session;

class Todo extends Model {

  protected $table = 'todo';

  public function getTodo ($userId) {
    $todo = DB::table($this->table)
    ->where('user_id', $userId)
    ->get()
    ->all();
    return $todo;
    }
}