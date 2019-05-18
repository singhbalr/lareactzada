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

}