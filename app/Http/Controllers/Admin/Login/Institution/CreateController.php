<?php

namespace App\Http\Controllers\Login\Institution;

use App\Http\Controllers\Controller;

class CreateController extends Controller
{
    public function __invoke()
    {
        return view('institution.create');
    }
}
