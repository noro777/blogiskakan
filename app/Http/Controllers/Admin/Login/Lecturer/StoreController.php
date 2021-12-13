<?php

namespace App\Http\Controllers\Login\Lecturer;

use App\Http\Controllers\Controller;
use App\Http\Request\Login\Lecturer\StoreRequest;
use Illuminate\Support\Facades\Hash;


use App\Models\Login\Lecturer;

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
        Lecturer::create($a);
        return redirect()->view('lecturer.create');
    }
}
