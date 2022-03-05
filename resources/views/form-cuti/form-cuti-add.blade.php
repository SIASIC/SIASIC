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

                    <div class="mt-6">
                        <div class="overflow-x-auto">
                            <table class="table table-zebra w-full">
                                <!-- head -->
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- row 1 -->
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    <!-- row 2 -->
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    <!-- row 3 -->
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <hr class="my-4">

                    <div class="mt-6 text-gray-500">

                        <form action="#" method="POST">
                            @csrf
                            <div class="form-control mb-4">
                                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
                            </div>
                            <div class="form-control mb-4">
                                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
                            </div>
                            <div class="form-control mb-4">
                                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
                            </div>
                        </form>

                        <button class="btn">Button</button>
                        <div class="alert shadow-lg mt-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="stroke-info flex-shrink-0 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>12 unread messages. Tap to see.</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</x-app-layout>