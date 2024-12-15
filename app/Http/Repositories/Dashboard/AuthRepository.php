<?php


namespace App\Http\Repositories\Dashboard;

use App\Models\Admin;

class AuthRepository
{
    function login($loginDTO)
    {
        return Admin::where('email', $loginDTO->getEmail())->first();
    }
}
