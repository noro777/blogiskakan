<?php

namespace App\Http\Controllers\Login\Guest;

use App\Http\Controllers\Controller;

class ShowController extends Controller
{
    public function __invoke(Guest $post)
    {
        return view('guest.show',compact('post'));
    }
}
