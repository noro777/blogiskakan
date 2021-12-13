<?php

namespace App\Http\Controllers\Work\Work;

use App\Http\Controllers\Controller;
use App\Http\Request\Work\Work\StoreRequest;
use App\Models\Work\Freelace;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $a = [
           'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ];


        Freelace::create($a);


        return redirect()->route('employer.create');
    }
}
