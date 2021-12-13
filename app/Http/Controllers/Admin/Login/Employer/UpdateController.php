<?php

namespace App\Http\Controllers\Login\Employer;

use App\Http\Controllers\Controller;
use App\Http\Request\Login\Employer\UpdateRequest;
use App\Models\Employer;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Employer $post)
    {
        $data = $request->validated();
        $post->update($data);
        return view('employer.show',compact('post'));
    }
}
