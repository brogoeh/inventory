<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SubmenuController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\OrderStatusController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportingController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WarehouseController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get("/", DashboardController::class);
    Route::get("/dashboard", DashboardController::class)->name("dashboard");
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // User routing ==============
    Route::resource('user', UserController::class);
    // Menu Routing ==============
    Route::resource('/setting/menu', MenuController::class);
    // Submenu Routing ==============
    Route::resource('/setting/submenu', SubmenuController::class);
    // Inventory Routing ==============
    Route::resource('inventory', InventoryController::class);
    // Supplier Routing ==============
    Route::resource('supplier', SupplierController::class);
    // Store Routing ==============
    Route::resource('store', StoreController::class);
    // Warehouse Routing ==============
    Route::resource('warehouse', WarehouseController::class);
    // Inventory Routing ==============
    Route::resource('item', ItemController::class);
    // Roles Routing ==============
    Route::resource('role', RoleController::class);
    // Order Routing ==============
    Route::resource('order', OrderController::class);
    Route::resource('order-status', OrderStatusController::class);
    Route::resource('order-detail', OrderDetailController::class);

    // report ==============
    Route::get('/report/pdf', [ReportingController::class, 'generatePDF'])->name('reports');
});


require __DIR__ . '/auth.php';
