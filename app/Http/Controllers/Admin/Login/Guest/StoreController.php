<?php

namespace App\Http\Controllers\Login\Guest;

use App\Http\Controllers\Controller;

use App\Http\Request\Login\Guest\StoreRequest;
use Illuminate\Support\Facades\Hash;


use App\Models\Login\Guest;

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
        Guest::create($a);
        return redirect()->route('guest.create');
    }
}
