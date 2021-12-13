<?php

namespace App\Http\Controllers\Login\Guest;

use App\Http\Controllers\Controller;

class DeleteController extends Controller
{
    public function __invoke(Guest $post)
    {
        $post->delete();
        return redirect()->route('guest.index');
    }
}
