<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="p-6 sm:px-20 bg-white border-b border-gray-200">

                    <div class="text-2xl block h-12 auto">
                        Form Cuti
                    </div>

                    <hr class="my-4">
{{-- 
                    <div class="container grid grid-cols-1 md:grid-cols-2">
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Cari form</span>
                            </label>
                            <input type="text" id='cari' name='cari' placeholder="Ketik disini..." class="input input-bordered w-full max-w-xs">
                        </div>
                        <div>
                            hai
                        </div>
                    </div> --}}

                    <div class="flex justify-center bg-gray-50 p-6 rounded-lg">
                        Hai
                    </div>

                    <div class="mt-6">
                        <div class="overflow-x-auto">
                            {{-- Tabel data --}}
                            <table class="table table-zebra w-full">
                                <!-- head -->
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>PNS</th>
                                        <th>Unit Kerja</th>
                                        <th>Jenis Cuti</th>
                                        <th>Alasan</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- row 1 -->
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                        <td>Cuti Sakit</td>
                                        <td>
                                            <button class="btn btn-xs btn-error"
                                                onclick="alert('Data akan dihapus selamanya!')">Hapus</button>
                                            <button class="btn btn-xs btn-info">Review</button>
                                        </td>
                                    </tr>
                                    <!-- row 2 -->
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                        <td>Cuti Sakit</td>
                                        <td>
                                            <button class="btn btn-xs btn-error"
                                                onclick="alert('Data akan dihapus selamanya!')">Hapus</button>
                                            <button class="btn btn-xs btn-info">Review</button>
                                        </td>
                                    </tr>
                                    <!-- row 3 -->
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                        <td>Cuti Sakit</td>
                                        <td>
                                            <button class="btn btn-xs btn-error"
                                                onclick="alert('Data akan dihapus selamanya!')">Hapus</button>
                                            <button class="btn btn-xs btn-info">Review</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
</x-app-layout>