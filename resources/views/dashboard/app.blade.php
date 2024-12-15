<!DOCTYPE html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable" data-theme="default" data-theme-colors="default">
    <head>
        <meta charset="utf-8" />
        <title>Dashboard | Velzon - Admin & Dashboard Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesbrand" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{dashboardAssets("assets/images/favicon.ico")}}">

        @if('ltr' == 'rtl')
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600&display=swap" rel="stylesheet">
        @else
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/>
        @endif

        <link href="{{dashboardAssets("assets/css/default/icons.css")}}" rel="stylesheet" type="text/css" />

        @if(true)
            <link href="{{dashboardAssets("assets/css/default/bootstrap.min.css")}}" rel="stylesheet" type="text/css" />
            <link href="{{dashboardAssets("assets/css/default/app.min.css")}}" rel="stylesheet" type="text/css" />
            <link href="{{dashboardAssets("assets/css/default/custom.min.css")}}" rel="stylesheet" type="text/css" />
        @else
            <link href="{{dashboardAssets("assets/css/default/bootstrap.min.css")}}" rel="stylesheet" type="text/css" />
            <link href="{{dashboardAssets("assets/css/default/app.min.css")}}" rel="stylesheet" type="text/css" />
            <link href="{{dashboardAssets("assets/css/default/custom.min.css")}}" rel="stylesheet" type="text/css" />
        @endif

        @viteReactRefresh
        @vite('resources/js/dashboard/app.jsx')
        @inertiaHead

        @php
            $translations = [...getAllTranslation()];
        @endphp

        <script>
            window.asideMenu = @json([]);
            window.languages = @json([]);
            window.currentLanguage = @json([]);
            window.translations = @json($translations);
        </script>

    </head>
    <body>
        @routes
        @inertia


        <script src="{{dashboardAssets("assets/libs/bootstrap/js/bootstrap.bundle.min.js")}}"></script>
        <script src="{{dashboardAssets("assets/libs/simplebar/simplebar.min.js")}}"></script>
        <script src="{{dashboardAssets("assets/libs/node-waves/waves.min.js")}}"></script>
        <script src="{{dashboardAssets("assets/libs/feather-icons/feather.min.js")}}"></script>
        <script src="{{dashboardAssets("assets/js/pages/plugins/lord-icon-2.1.0.js")}}"></script>
        <script src="{{dashboardAssets("assets/js/plugins.js")}}"></script>
        <script src="{{dashboardAssets("assets/libs/jsvectormap/jsvectormap.min.js")}}"></script>
        <script src="{{dashboardAssets("assets/libs/jsvectormap/maps/world-merc.js")}}"></script>
        <script src="{{dashboardAssets("assets/libs/swiper/swiper-bundle.min.js")}}"></script>
        <script src="{{dashboardAssets("assets/js/pages/dashboard-ecommerce.init.js")}}"></script>
    </body>
</html>
