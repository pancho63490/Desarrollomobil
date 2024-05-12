<?php
declare(strict_types=1);


use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;
use App\Http\Controllers\UsuarioController;
use Illuminate\Foundation\Application;

use Inertia\Inertia;


Route::group(['prefix' => config('sanctum.prefix', 'sanctum')], static function () {
    Route::get('/csrf-cookie',[\Laravel\Sanctum\Http\Controllers\CsrfCookieController::class, 'show'])
        // Use tenancy initialization middleware of your choice​
        ->middleware(['universal', 'web', \Stancl\Tenancy\Middleware\InitializeTenancyByDomain::class])
        ->name('sanctum.csrf-cookie');
});


Route::middleware([
    'web',
    //InitializeTenancyByDomain::class,​
    //PreventAccessFromCentralDomains::class,​
])->group(function () {

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });   

    Route::middleware([
        'auth:sanctum',
        config('jetstream.auth_session'),
        'verified',
    ])->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');

    });
    Route::middleware(['auth:sanctum', 'verified'])->get('/vistausuarios', function () {
        return Inertia::render('InicioVistaUsuarios');
    })->name('vistausuarios');
    Route::get('/usuarios', [UsuarioController::class, 'index'])->middleware((['auth:sanctum', 'verified']));
});


