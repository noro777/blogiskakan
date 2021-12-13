<?php

namespace App\Http\Controllers\Login\Partner;

use App\Http\Controllers\Controller;

class CreateController extends Controller
{
    public function __invoke()
    {
        return view('partner.create');
    }
}
