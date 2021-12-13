<?php

namespace App\Http\Controllers\Login\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\Lecturer;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Lecturer::all();
        return view('lecturer.index',compact('data'));
    }
}
