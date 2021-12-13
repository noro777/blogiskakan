<?php

namespace App\Http\Controllers\Login\Institution;

use App\Http\Controllers\Controller;
use App\Http\Request\Login\Institution\UpdateRequest;
use App\Models\Login\Institution;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Institution $post)
    {
        $data = $request->validated();
        $post->update($data);
        return view('institution.show',compact('post'));
    }
}
