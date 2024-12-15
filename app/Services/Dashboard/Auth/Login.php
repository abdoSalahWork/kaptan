<?php


namespace App\Services\Dashboard\Auth;

use App\DTOs\Dashboard\Auth\LoginDTO;
use App\Http\Repositories\Dashboard\AuthRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Login
{
    function __construct(private AuthRepository $authRepository) {}

    function login(LoginDTO $loginDTO)
    {
        $admin = $this->authRepository->login($loginDTO);

        if (!$admin) {
            return back()->withErrors(['email' => __('messages.invalid_email'),]);
        }

        if (!Hash::check($loginDTO->getPassword(), $admin->password)) {
            return back()->withErrors(['password' => __('messages.invalid_password'),]);
        }

        if ($admin->status ==  "blocked") {
            return back()->withErrors(['email' => __('messages.account_blocked'),]);
        }

        Auth::guard('admin')->login($admin);
        request()->session()->regenerate();
        return redirect()->intended('/dashboard/admin');
    }
}
