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

                    <div class="flex justify-between flex-wrap">

                        <div class="text-2xl h-12 flex-initial">
                            Form Cuti
                        </div>

                        <div class="flex-initial grid gap-4 grid-cols-1 lg:grid-cols-2">
                            <a href="{{ route('form-cuti-add') }}">
                            
                                <button class="btn gap-2">
                                    Tambah Pengajuan Form
                                    <span>+</span>
                                </button>
                            </a>
                            <button class="btn gap-2">
                                Filter
                                <span>+</span>
                            </button>
                        </div>
                    </div>

                    <hr class="my-4">
                    {{--
                    <div class="container grid grid-cols-1 md:grid-cols-2">
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Cari form</span>
                            </label>
                            <input type="text" id='cari' name='cari' placeholder="Ketik disini..."
                                class="input input-bordered w-full max-w-xs">
                        </div>
                        <div>
                            hai
                        </div>
                    </div> --}}

                    <div class="flex justify-center bg-gray-50 p-6 rounded-lg gap-4">
                        <form action="#" method="get">
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Cari Form</span>
                                </label>
                                <input type="text" placeholder="Cari Form" id="cari" name="cari"
                                    class="input input-bordered w-full max-w-xs">

                            </div>
                        </form>
                    </div>

                    <div class="mt-6">
                        <div class="overflow-x-auto">
                            {{-- Tabel data --}}

                            @if ($form_cutis->count())
                            
                                <table class="table table-zebra table-compact w-full">
                                    <!-- head -->
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>PNS</th>
                                            <th>Unit Kerja</th>
                                            <th>Jenis Cuti</th>
                                            <th>Alasan</th>
                                            <th>Tanggal Pengajuan</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($form_cutis as $form_cuti)
                                            
                                            <tr>
                                                <th>{{ $form_cuti->id }}</th>
                                                <td>{{ substr($form_cuti->pns_nama, 0, 20) }}...</td>
                                                <td>{{ substr($form_cuti->pns_unit_kerja, 0, 20) }}...</td>
                                                <td>{{ $form_cuti->jenis_cuti->nama_cuti }}</td>
                                                <td>{{ substr($form_cuti->alamat, 0, 20)  }}...</td>
                                                <td>{{ date('d-m-Y', strtotime($form_cuti->created_at))  }}</td>
                                                <td>
                                                    <button class="btn btn-xs btn-error"
                                                        onclick="alert('Data akan dihapus selamanya!')">Hapus</button>
                                                    <button class="btn btn-xs btn-info">Review</button>
                                                </td>
                                            </tr>
                                        @endforeach
                                        
                                    </tbody>
                                </table>

                                <div class="my-8">
                                    {{ $form_cutis->links() }}
                                </div>

                            @else
                                <h1>Tidak ada data</h1>
                            @endif
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
</x-app-layout>