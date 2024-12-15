<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DashboardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert([
            [
                'type' => 'kaptan',
                'name_ar' => 'مشرف قبطان',
                'name_en' => 'Administrator Kaptan',
                'name_tr' => 'Yönetici Kaptan',
                'permissions' => json_encode(['view', 'edit', 'delete']),
            ],
            [
                'type' => 'company',
                'name_ar' => 'شركة',
                'name_en' => 'Company',
                'name_tr' => 'Şirket',
                'permissions' => json_encode(['view', 'edit']),
            ],
            [
                'type' => 'hotel',
                'name_ar' => 'فندق',
                'name_en' => 'Hotel',
                'name_tr' => 'Otel',
                'permissions' => json_encode(['view']),
            ],
        ]);
        Admin::create([
            'entity_id' => 1,
            'type' => 'kaptan',
            'status' => 'active',
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin123'),
            'email_verified_at' => now(),
            'role_id' => 1,
        ]);
    }
}