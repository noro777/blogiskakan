<?php

namespace App\Http\Controllers\Login\Student;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Request\Login\Student\StoreRequest;
use App\Models\Login\Student;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $data = [
             'password' => Hash::make($data['password']),
         ];
        Student::create($data);
        return redirect()->route('student.create');
    }
}
