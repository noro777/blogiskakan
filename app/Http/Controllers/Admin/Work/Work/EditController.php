<?php

namespace App\Http\Controllers\Login\Employer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EditController extends Controller
{
    public function __invoke(Employer $post)
    {
        return view('employer.edit',compact('post'));
    }
}
