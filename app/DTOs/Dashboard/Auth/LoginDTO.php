<?php

namespace App\DTOs\Dashboard\Auth;


class LoginDTO
{

    function __construct(private string $email, private string $password, private bool $remember) {}


    function getEmail()
    {
        return $this->email;
    }

    function getPassword()
    {
        return $this->password;
    }

    function getRemember()
    {
        return $this->remember;
    }
}
