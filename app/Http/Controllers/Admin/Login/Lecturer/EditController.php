<?php

namespace App\Http\Controllers\Login\Lecturer;

use App\Http\Controllers\Controller;

class EditController extends Controller
{
    public function __invoke(Lecturer $post)
    {
        return view('lecturer.edit',compact('post'));
    }
}
