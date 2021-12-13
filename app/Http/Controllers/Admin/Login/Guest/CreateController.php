<?php

namespace App\Http\Controllers\Login\Guest;

use App\Http\Controllers\Controller;

class CreateController extends Controller
{
    public function __invoke()
    {
        return view('Login.Guest.create');
    }
}
