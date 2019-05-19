<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Todo;

class todoController extends Controller {

    function index($userId){
        return $userId;
    }

    function getTodo($userId){
        $todoModel = new Todo;

        $result = $todoModel->getTodo($userId);

        return $result;
    }

    function addTask(Request $request){

        $todoModel = new Todo; 

        $taskObject = (object)[
            'user_id' => $request->input('user_id'),
            'todo_type_id'=> $request->input('todo_type_id'),
            'todo_title' => $request->input('todo_title'),
            'todo_content' => $request->input('todo_content'),
            'completed' => $request->input('completed'),
        ];

        $resultId = $todoModel->addTask($taskObject);

        return  $resultId;
    }

}