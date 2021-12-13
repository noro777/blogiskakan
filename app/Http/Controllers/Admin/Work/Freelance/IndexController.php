<?php

namespace App\Http\Controllers\Work\Freelance\IndexController;

use App\Http\Controllers\Controller;
use App\Models\Work\Freelance;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Freelance::all();
        return view('employer.index',compact('data'));
    }
}
