<?php

namespace App\Http\Controllers\Login\Partner;

use App\Http\Controllers\Controller;
use App\Models\Login\Partner;
class DeleteController extends Controller
{
    public function __invoke(Partner $post)
    {
        $post->delete();
        return redirect()->route('partner.index');
    }
}
