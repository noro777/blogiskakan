<?php

namespace App\Http\Controllers\Login\Institution;

use App\Http\Controllers\Controller;
use App\Models\Institution;
use App\Models\Student;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Institution::all();
        return view('institution.index',compact('data'));
    }
}
