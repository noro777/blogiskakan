<?php

namespace App\Http\Controllers\Login\Employer;

use App\Http\Controllers\Controller;
use App\Models\Login\Employer;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Employer::all();
        return view('Login.Employer.index',compact('data'));
    }
}
