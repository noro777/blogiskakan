<?php

namespace App\Http\Controllers\Login\Guest;

use App\Http\Controllers\Controller;

class EditController extends Controller
{
    public function __invoke(Guest $post)
    {
        return view('guest.edit',compact('post'));
    }
}
