<?php

namespace App\Http\Controllers\Login\Employer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(Employer $post)
    {
        $post->delete();
        return redirect()->route('employer.index');
    }
}
