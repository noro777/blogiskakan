<?php

namespace App\Http\Controllers\Login\Institution;

use App\Http\Controllers\Controller;

class DeleteController extends Controller
{
    public function __invoke(Institution $post)
    {
        $post->delete();
        return redirect()->route('institution.index');
    }
}
