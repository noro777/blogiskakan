<?php

namespace App\Http\Controllers\Work\Work;

use App\Http\Controllers\Controller;
use App\Models\Work\Work;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Work::all();
        return view('employer.index',compact('data'));
    }
}
