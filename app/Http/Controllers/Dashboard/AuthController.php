<?php

namespace App\Http\Controllers\Dashboard;

use App\DTOs\Dashboard\Auth\LoginDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\LoginPageRequest;
use App\Http\Requests\Dashboard\LoginRequest;
use App\Services\Dashboard\Auth\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    function __construct(private Login $loginService) {}

    function loginPage(LoginPageRequest $request)
    {
        return Inertia::render("Dashboard/Auth/Login");
    }

    public function login(LoginRequest $request)
    {
        $loginDTO = new LoginDTO(
            $request->input('email'),
            $request->input('password'),
            $request->input('remember')
        );
        return $this->loginService->login($loginDTO);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/dashboard/login');
    }
}
