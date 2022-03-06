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
                        Jenis Cuti
                    </div>

                    <hr class="my-4">

                    <div class="mt-6 text-gray-500">
                        <form action="{{ route('jenis-cuti-add') }}" method="POST">
                            @csrf

                            <div class="p-6 mb-4 bg-gray-50 rounded-lg">
                                <h1 class="mb-4">&nbsp;</h1>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">Nama Cuti</span>
                                        </label>
                                        <input type="text" placeholder="Nama Cuti" id="nama_cuti" name="nama_cuti" autofocus
                                            required maxlength="50" class="input input-bordered w-full">
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Persyartan</span>
                                        </label>
                                        <textarea class="textarea textarea-bordered h-24" placeholder="Persyaratan..."
                                            name="persyaratan" id="persyaratan"
                                            required></textarea>
                                    </div>
                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">Jatah dalam setahun</span>
                                        </label>
                                        <input type="number" placeholder="Hitungan hari" id="jatah" name="jatah" required
                                            class="input input-bordered w-full">
                                    </div>

                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">Unit Kerja</span>
                                        </label>
                                        <input type="text" placeholder="Unit Kerja" id="unit_kerja" name="unit_kerja"
                                            required maxlength="100" class="input input-bordered w-full">
                                    </div>

                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">NIP Pejabat bersangkutan</span>
                                        </label>
                                        <input type="text" placeholder="Masa Kerja" id="nip_pejabat" name="nip_pejabat"
                                            required maxlength="18" class="input input-bordered w-full"
                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                                    </div>
                                </div>

                            </div>

                            @error('*')

                            <div class="p-6 mb-4 bg-gray-50 rounded-lg">
                                <h1 class="mb-4">File Persyaratan</h1>

                                <div class="">
                                    {{ $message }}
                                </div>

                            </div>
                            @enderror

                            <button class="btn">Simpan data</button>

                        </form>
                    </div>
                </div>


            </div>
        </div>
    </div>
</x-app-layout>