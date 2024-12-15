<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render("Dashboard/Admin/List", [
            "admins"      => []
        ]);
    }

    public function create()
    {
        return Inertia::render("Dashboard/Admin/Create", [
            "admins"      => []
        ]);
    }
}
