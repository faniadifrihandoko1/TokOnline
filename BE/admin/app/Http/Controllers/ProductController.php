<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $users = User::paginate();
        return view('product.index', compact('users'));
    }
    public function addProduct()
    {
        $users = User::paginate();
        return view('product.addProduct', compact('users'));
    }
}
