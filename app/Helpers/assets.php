<?php

if (!function_exists("dashboardAssets")) {
    function dashboardAssets($path, $secure = null) {
        return asset("admin/" . $path, $secure);
    }
}

if (!function_exists("getAllTranslation")) {
    function getAllTranslation() {
        $locale = app()->getLocale();
        $path = resource_path("lang/{$locale}");
        $translations = [];
        if (\Illuminate\Support\Facades\File::exists($path)) {
            $files = \Illuminate\Support\Facades\File::allFiles($path);
            foreach ($files as $file) {
                $filename = pathinfo($file, PATHINFO_FILENAME);
                $translations[$filename] = \Illuminate\Support\Facades\File::getRequire($file);
            }
        }
        if (\Illuminate\Support\Facades\File::exists($path.".json")) {
            $translations = array_merge($translations, json_decode(file_get_contents($path.".json"), true));
        }
        return $translations;
    }
}
