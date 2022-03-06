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
                            Jenis Cuti
                        </div>

                        <div class="flex-initial">
                            <a href="{{ route('jenis-cuti-add') }}">
                                <button class="btn gap-2">
                                    Tambah Jenis Cuti
                                    <span>+</span>
                                </button>
                            </a>
                        </div>
                    </div>

                    <hr class="my-4">

                    <div class="mt-6">
                        <div class="overflow-x-auto">
                            {{-- Tabel data --}}

                            @if ($jenis_cutis->count())
                            
                                <table class="table table-zebra table-compact w-full">
                                    <!-- head -->
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Nama Cuti</th>
                                            <th>Persyaratan</th>
                                            <th>Jatah</th>
                                            <th>Pejabat Bersangkutan</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($jenis_cutis as $jenis_cuti)
                                            
                                            <tr>
                                                <th>{{ $jenis_cuti->id }}</th>
                                                <td>{{ $jenis_cuti->nama_cuti }}</td>
                                                <td>{{ substr($jenis_cuti->persyaratan, 0, 20) }}...</td>
                                                <td>{{ $jenis_cuti->jatah }}</td>
                                                <td>{{ $jenis_cuti->nip_pejabat  }}</td>
                                                <td>
                                                    <button class="btn btn-xs btn-error"
                                                        onclick="alert('Data akan dihapus selamanya!')">Hapus</button>
                                                    <button class="btn btn-xs btn-info">Review</button>
                                                </td>
                                            </tr>
                                        @endforeach
                                        
                                    </tbody>
                                </table>

                                {{-- <div class="my-8">
                                    {{ $jenis_cutis->links() }}
                                </div> --}}

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