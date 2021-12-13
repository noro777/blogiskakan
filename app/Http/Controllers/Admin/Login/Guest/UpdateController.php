<?php

namespace App\Http\Controllers\Login\Guest;

use App\Http\Controllers\Controller;

use App\Http\Request\Guest\UpdateRequest;
use App\Models\Guest;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Guest $post)
    {
        $data = $request->validated();
        $post->update($data);
        return view('guest.show',compact('post'));
    }
}
