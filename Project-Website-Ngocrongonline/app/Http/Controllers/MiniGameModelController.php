<?php

namespace App\Http\Controllers;

use App\Models\miniGameModel;
use Illuminate\Http\Request;

class MiniGameModelController extends Controller
{
    public function layData()
    {
        $data = miniGameModel::select('id', 'tieu_de', 'hinh_anh', 'so_lan_quay', 'gia_cu', 'gia_moi', 'tinh_trang')->get();
        return response()->json($data);
    }

    public function taoData(Request $request)
    {
        miniGameModel::create([
            'hinh_anh' =>  $request->hinh_anh,
            'tieu_de' => $request->tieu_de,
            'so_lan_quay' => $request->so_lan_quay,
            'gia_cu' => $request->gia_cu,
            'gia_moi' => $request->gia_moi,
            'tinh_trang' => $request->tinh_trang,
        ]);
    }

    public function xoaData(Request $request)
    {
        miniGameModel::where('id', $request->id)->delete();
    }

    public function updateData(Request $request)
    {
        $miniGame = miniGameModel::where('id', $request->id)->first();
        if ($miniGame) {
            $miniGame->hinh_anh = $request->hinh_anh;
            $miniGame->tieu_de = $request->tieu_de;
            $miniGame->so_lan_quay = $request->so_lan_quay;
            $miniGame->gia_cu = $request->gia_cu;
            $miniGame->gia_moi = $request->gia_moi;
            $miniGame->tinh_trang = $request->tinh_trang;
        }
        $miniGame->save();
    }
}
