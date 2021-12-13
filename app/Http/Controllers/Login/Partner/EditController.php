<?php

namespace App\Http\Controllers\Login\Partner;

use App\Http\Controllers\Controller;
use App\Models\Login\Partner;

class EditController extends Controller
{
    public function __invoke(Partner $post)
    {
        return view('partner.edit',compact('post'));
    }
}
