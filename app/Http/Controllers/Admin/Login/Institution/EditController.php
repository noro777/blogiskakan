<?php

namespace App\Http\Controllers\Login\Institution;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EditController extends Controller
{
    public function __invoke(Institution $post)
    {
        return view('institution.edit',compact('post'));
    }
}
