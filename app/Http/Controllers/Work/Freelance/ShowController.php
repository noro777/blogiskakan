<?php

namespace App\Http\Controllers\Login\Employer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShowController extends Controller
{
    public function __invoke(Employer $post)
    {
        return view('employer.show',compact('post'));
    }
}
