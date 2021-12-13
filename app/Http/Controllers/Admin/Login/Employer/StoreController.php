<?php

namespace App\Http\Controllers\Login\Employer;

use App\Http\Controllers\Controller;
use App\Http\Request\Login\Employer\StoreRequest;
use App\Models\Login\Employer;
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
        

        Employer::create($a);


        return redirect()->route('employer.create');
    } 
}
