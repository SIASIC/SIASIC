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

                    <div class="mt-6 text-gray-500">
                        <form action="{{ route('form-cuti-add') }}" method="POST">
                            @csrf

                            <div class="p-6 mb-4 bg-gray-50 rounded-lg">
                                <h1 class="mb-4">Data Pegawai</h1>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">NIP</span>
                                        </label>
                                        <input type="text" placeholder="NIP" id="nip" name="nip" maxlength="18"
                                            class="input input-bordered w-full"
                                            required autofocus
                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                                    </div>

                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">Nama</span>
                                        </label>
                                        <input type="text" placeholder="Nama" id="nama" name="nama"
                                            required maxlength="100"
                                            class="input input-bordered w-full">
                                    </div>

                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">Jabatan</span>
                                        </label>
                                        <input type="text" placeholder="Jabatan" id="jabatan" name="jabatan"
                                            required maxlength="100"
                                            class="input input-bordered w-full">
                                    </div>

                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">Unit Kerja</span>
                                        </label>
                                        <input type="text" placeholder="Unit Kerja" id="unit_kerja" name="unit_kerja"
                                            required maxlength="100"
                                            class="input input-bordered w-full">
                                    </div>

                                    <div class="form-control mb-4">
                                        <label class="label">
                                            <span class="label-text">Masa Kerja</span>
                                        </label>
                                        <input type="number" placeholder="Masa Kerja" id="masa_kerja" name="masa_kerja"
                                            required maxlength="2"
                                            class="input input-bordered w-full"
                                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
                                    </div>
                                </div>

                            </div>

                            <div class="p-6 mb-4 bg-gray-50 rounded-lg">
                                <h1 class="mb-4">Data Cuti</h1>

                                <div class="">

                                    <div class="grid grid-cols-2 gap-4">

                                        <div class="form-control w-full mb-4">
                                            <label class="label">
                                                <span class="label-text">Jenis Cuti Yang Diambil</span>
                                            </label>
                                            <select name="jenis_cuti" id="jenis-cuti" class="select select-bordered" required>
                                                <option disabled selected>Pilih salah satu</option>
                                                <option>Star Wars</option>
                                                <option>Harry Potter</option>
                                                <option>Lord of the Rings</option>
                                                <option>Planet of the Apes</option>
                                                <option>Star Trek</option>
                                            </select>
                                        </div>

                                        <div class="form-control mb-4">
                                            <label class="label">
                                                <span class="label-text">Alasan Cuti</span>
                                            </label>
                                            <textarea name="alasan" id="alasan" class="textarea textarea-bordered h-24"
                                                required
                                                placeholder="Bio"></textarea>
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-4 gap-4">

                                        <div class="form-control mb-4">
                                            <label class="label">
                                                <span class="label-text">Lama Cuti</span>
                                            </label>
                                            <input type="number" placeholder="Selama" id="selama" name="selama"
                                                required class="input input-bordered w-full"">
                                        </div>

                                        <div class="form-control mb-4">
                                            <label class="label">
                                                <span class="label-text">&nbsp;</span>
                                            </label>

                                            <select name="waktu" id="waktu" class="select select-bordered" required>
                                                <option disabled selected>Pilih salah satu</option>
                                                <option value="hari">Hari</option>
                                                <option value="bulan">Bulan</option>
                                                <option value="tahun">Tahun</option>
                                            </select>

                                        </div>

                                        <div class="form-control mb-4">
                                            <label class="label">
                                                <span class="label-text">Mulai Tanggal</span>
                                            </label>
                                            <input type="date" placeholder="Mulai tanggal" id="mulai" name="mulai" required
                                                class="input input-bordered w-full">

                                        </div>

                                        <div class="form-control mb-4">
                                            <label class="label">
                                                <span class="label-text">Sampai Dengan </span>
                                            </label>
                                            <input type="date" placeholder="Sampai dengan" id="sampai" name="sampai" required
                                                class="input input-bordered w-full">
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-2 gap-4">

                                        <div class="form-control mb-4">
                                            <label class="label">
                                                <span class="label-text">Alamat Menjalankan Cuti</span>
                                            </label>
                                            <textarea name="alamat" id="alamat" class="textarea textarea-bordered h-24" required
                                                placeholder="Bio"></textarea>
                                        </div>

                                        <div class="form-control mb-4">
                                            <label class="label">
                                                <span class="label-text">Nomor Telepon yang bisa dihubungi</span>
                                            </label>
                                            <input type="text" placeholder="No. Telp" id="telp" name="telp"
                                                class="input input-bordered w-full"
                                                required maxlength="13"
                                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');">
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="p-6 mb-4 bg-gray-50 rounded-lg">
                                <h1 class="mb-4">Catatan Cuti</h1>

                                <input type="hidden" name="catatan_cuti" value='{"name":"John"}'>

                                <div class="">
                                    <table class="table table-zebra w-full">
                                        <!-- head -->
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Jenis Cuti</th>
                                                <th>Sisa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- row 1 -->
                                            <tr>
                                                <th>1</th>
                                                <td>Cuti Sakit</td>
                                                <td>4</td>
                                                
                                            </tr>
                                            <!-- row 2 -->
                                            <tr>
                                                <th>2</th>
                                                <td>Cuti Sakit</td>
                                                <td>4</td>
                                                
                                            </tr>
                                            <!-- row 3 -->
                                            <tr>
                                                <th>3</th>
                                                <td>Cuti Sakit</td>
                                                <td>4</td>
                                                
                                            </tr>
        
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div class="p-6 mb-4 bg-gray-50 rounded-lg">
                                <h1 class="mb-4">File Persyaratan</h1>

                                <div class="">
                                    Disini upload file pakai filepond
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