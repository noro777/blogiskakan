<?php

namespace App\Http\Controllers\Admin\Login\Institution;

use App\Http\Controllers\Controller;
use App\Http\Request\Login\Institution\StoreRequest;
use App\Models\Login\Institution;
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
        Institution::create($a);
        return redirect()->route('institution.index');
    }
}
