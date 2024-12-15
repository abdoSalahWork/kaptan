<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function () {
            \Illuminate\Support\Facades\Route::namespace('Dashboard')->prefix('dashboard')->name('dashboard.')->middleware("web")->group(base_path('routes/dashboard.php'));
            \Illuminate\Support\Facades\Route::namespace('Company')->prefix('company')->name('company.')->middleware("web")->group(base_path('routes/company.php'));
            \Illuminate\Support\Facades\Route::namespace('Hotel')->prefix('hotel')->name('hotel.')->middleware("web")->group(base_path('routes/hotel.php'));
        }
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
