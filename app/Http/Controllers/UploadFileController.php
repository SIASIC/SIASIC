<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadFileController extends Controller
{
    public function store(Request $request)
    {

        if ($request->hasFile('file_upload')) {
            $files = $request->file('file_upload');
            $newFileName = "";

            foreach ($files as $file) {
                $fileExt = $file->extension();
                $newFileName = Str::random(20) . '.' . $fileExt;

                $file->storeAs('public/temps/', $newFileName);
            }

            return $newFileName;
        }

        return '';

    }

    public function destroy(Request $request)
    {

        $file = $request->getContent();

        Storage::delete('public/temps/' . $file);

        return $file;

    }
}
