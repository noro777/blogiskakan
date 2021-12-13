<?php

namespace App\Http\Controllers\Login\Partner;

use App\Http\Controllers\Controller;
use App\Models\Login\Partner;

class IndexController extends Controller
{
    public function __invoke()
    {
        $data = Partner::all();
        return view('partner.index',compact('data'));
    }
}
