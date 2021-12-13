<?php

namespace App\Http\Controllers\Login\Lecturer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShowController extends Controller
{
    public function __invoke(Lecturer $post)
    {
        return view('lecturer.show',compact('post'));
    }
}
