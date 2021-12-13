<?php

namespace App\Http\Controllers\Login\Lecturer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Lecturer\UpdateRequest;
use App\Models\Login\Lecturer;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Post $post)
    {
        $data = $request->validated();
        $post->update($data);
        return view('admin.posts.show',compact('post'));
    }
}
