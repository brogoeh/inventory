<?php

use App\Http\Controllers\{
    DashboardController,
    InventoryController,
    ItemController,
    SubmenuController,
    MenuController,
    OrderController,
    OrderDetailController,
    OrderStatusController,
    ProfileController,
    ReportingController,
    RoleController,
    StoreController,
    SupplierController,
    UserController,
    WarehouseController
};

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
