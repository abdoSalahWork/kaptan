<?php

if (!function_exists("successAlert")) {
    function successAlert($title, $subTitle = null, $body = null) {
        return [
            'type' => 'success',
            'title'     => $title,
            'subTitle'  => $subTitle,
            'body'      => $body,
            'icon'  => 'ri-check-double-line'
        ];
    }
}


if (!function_exists("primaryAlert")) {
    function primaryAlert($title, $subTitle = null, $body = null) {
        return [
            'type' => 'primary',
            'title'     => $title,
            'subTitle'  => $subTitle,
            'body'      => $body,
            'icon'  => 'ri-user-smile-line'
        ];
    }
}


if (!function_exists("dangerAlert")) {
    function dangerAlert($title, $subTitle = null, $body = null) {
        return [
            'type'      => 'danger',
            'title'     => $title,
            'subTitle'  => $subTitle,
            'body'      => $body,
            'icon'      => 'ri-alert-line'
        ];
    }
}


if (!function_exists("warningAlert")) {
    function warningAlert($title, $subTitle = null, $body = null) {
        return [
            'type' => 'warning',
            'title'     => $title,
            'subTitle'  => $subTitle,
            'body'      => $body,
            'icon'  => 'ri-alert-line'
        ];
    }
}
