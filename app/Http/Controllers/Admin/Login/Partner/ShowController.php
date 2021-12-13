<?php

namespace App\Http\Controllers\Login\Partner;

use App\Http\Controllers\Controller;
use App\Models\Login\Partner;
use Illuminate\Http\Request\Login;

class ShowController extends Controller
{
    public function __invoke(Partner $post)
    {
        return view('partner.show',compact('post'));
    }
}
