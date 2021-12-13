<?php

namespace App\Http\Controllers\Login\Employer;

use App\Http\Controllers\Controller;

class CreateController extends Controller
{
    public function __invoke()
    {
        return view('Login.Employer.create');
    }
}
