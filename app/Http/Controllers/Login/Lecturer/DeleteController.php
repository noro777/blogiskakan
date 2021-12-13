<?php

namespace App\Http\Controllers\Login\Lecturer;

use App\Http\Controllers\Controller;

class DeleteController extends Controller
{
    public function __invoke(Lecturer $post)
    {
        $post->delete();
        return redirect()->route('lecturer.index');
    }
}
