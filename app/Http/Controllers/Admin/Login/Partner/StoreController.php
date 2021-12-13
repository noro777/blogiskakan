<?php

namespace App\Http\Controllers\Admin\Login\Partner;

use App\Http\Controllers\Controller;
use App\Http\Request\Login\Partner\StoreRequest;
use App\Models\Login\Partner;
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
        Partner::create($a);
        return redirect()->route('student.index');
    }
}
