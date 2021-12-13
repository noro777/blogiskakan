<?php

namespace App\Http\Controllers\Login\Guest;

use App\Http\Controllers\Controller;
use App\Models\Guest;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Guest::all();
        return view('guest.index',compact('data'));
    }
}
