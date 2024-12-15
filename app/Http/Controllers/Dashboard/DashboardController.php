<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render("Dashboard/Dashboard", [
            "test"      => "Test"
        ]);
    }

    public function components()
    {
        return Inertia::render("Dashboard/Components", [
            "alert"     => successAlert("Yey! Everything worked!", "This alert needs your attention, but it's not super important.", "Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),
            "roles"    => Role::paginate(),
        ]);
    }
}
