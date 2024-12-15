<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/login', [\App\Http\Controllers\Dashboard\AuthController::class, 'loginPage'])->name('loginPage');
Route::post('/login', [\App\Http\Controllers\Dashboard\AuthController::class, 'login'])->name('login');


// Route::middleware('auth')->group(function () {
Route::get('/', [\App\Http\Controllers\Dashboard\DashboardController::class, "index"])->name("index");
Route::get('/components', [\App\Http\Controllers\Dashboard\DashboardController::class, "components"])->name("components");
Route::get('/admin', [\App\Http\Controllers\Dashboard\AdminController::class, "index"])->name("admin.index");
Route::get('/admin/create', [\App\Http\Controllers\Dashboard\AdminController::class, "create"])->name("admin.create");
// });
