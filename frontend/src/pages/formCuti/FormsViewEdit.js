import React, { useState } from "react";
import ReactDOM from "react-dom";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
	Input,
	Button,
	Label,
	Select,
	Textarea,
	Card,
	CardBody,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "@windmill/react-ui";

import { MailIcon } from "../../icons";
import Buttons from "../Buttons";
import { TrashIcon, SearchIcon } from "../../icons";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Forms() {
	const [files, setFiles] = useState([]);
	const [isViewOpen, setIsViewOpen] = useState(false);

	function openModal() {
		setIsViewOpen(true);
	}

	function closeModal() {
		setIsViewOpen(false);
	}

	return (
		<>
			<PageTitle>Lihat / Edit Form Cuti</PageTitle>

			<SectionTitle>Data Pegawai</SectionTitle>
			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
					<div>
						<Label>
							<span>NIP</span>
							<Input className="mt-1" placeholder="Jane Doe" />
						</Label>

						<Label className="mt-4">
							<span>Nama</span>
							<Input className="mt-1" placeholder="Jane Doe" />
						</Label>
					</div>
					<div>
						<Label>
							<span>Jabatan</span>
							<Input className="mt-1" placeholder="Jane Doe" />
						</Label>

						<Label className="mt-4">
							<span>Unit Kerja</span>
							<Input className="mt-1" placeholder="Jane Doe" />
						</Label>

						<Label className="mt-4">
							<span>Masa Kerja</span>
							<Input className="mt-1" placeholder="Jane Doe" />
						</Label>
					</div>
				</div>
			</div>

			<SectionTitle>Keterangan cuti</SectionTitle>

			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<Label>
					<span>Jenis Cuti</span>
					<Select className="mt-1">
						<option>---</option>
						<option>Cuti Tahunan</option>
						<option>Cuti Besar</option>
						<option>Cuti Sakit</option>
						<option>Cuti Melahirkan</option>
						<option>Cuti Karena Alasan Penting</option>
						<option>Cuti di luar Tanggungan Negara</option>
					</Select>
				</Label>

				<Label className="mt-4">
					<span>Alasan cuti</span>
					<Textarea
						className="mt-1"
						rows="3"
						placeholder="Enter some long form content."
					/>
				</Label>

				<div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
					<div className="grid grid-cols-3 gap-4">
						<Label className="col-span-2">
							<span>Selama</span>
							<Input className="mt-1" placeholder="120" />
						</Label>
						<Label>
							<span>&nbsp;</span>
							<Select className="mt-1">
								<option>Hari</option>
								<option>Minggu</option>
								<option>Bulan</option>
								<option>Tahun</option>
							</Select>
						</Label>
					</div>
					<Label>
						<span>Mulai Tanggal</span>
						<Input className="mt-1" placeholder="Jane Doe" type="date" />
					</Label>
					<Label>
						<span>Sampai Tanggal</span>
						<Input className="mt-1" placeholder="Jane Doe" type="date" />
					</Label>
				</div>
			</div>

			<SectionTitle>Catatan Cuti</SectionTitle>

			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<center>Catatan cuti</center>
			</div>

			<SectionTitle>Alamat Cuti</SectionTitle>

			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<Label>
					<span>Alamat selama menjalankan cuti</span>
					<Textarea
						className="mt-1"
						rows="3"
						placeholder="Enter some long form content."
					/>
				</Label>

				<Label className="mt-4">
					<span>Telepon</span>
					<Input className="mt-1" placeholder="120" />
				</Label>
			</div>

			<SectionTitle>File Persyaratan</SectionTitle>

			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					<Card className="relative inline-block">
						<img
							className="object-cover"
							src="https://windmillui.com/img/forest.jpeg"
						/>
						<div className="absolute top-0 right-0">
							<span
								onClick={openModal}
								class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-green-600 hover:cursor-pointer"
							>
								<SearchIcon className="w-5 h-5  " aria-hidden="true" />
							</span>
							<span
								onClick={() => alert("Hapus gambar!")}
								class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 hover:cursor-pointer"
							>
								<TrashIcon className="w-5 h-5  " aria-hidden="true" />
							</span>
						</div>
					</Card>
					<Card>
						<img
							className="object-cover"
							src="https://windmillui.com/img/forest.jpeg"
						/>
					</Card>
				</div>
			</div>

			<SectionTitle>Upload File Persyaratan Baru</SectionTitle>

			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<FilePond
					className="mt-4"
					files={files}
					onupdatefiles={setFiles}
					allowMultiple={true}
					maxFiles={3}
					server="/api"
					name="files"
					labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
				/>
			</div>

			<Button className="mb-4">
				<span>Ubah form cuti</span>
			</Button>

			<div className="my-8"></div>

			<Modal isOpen={isViewOpen} onClose={closeModal}>
				<ModalHeader>Modal header</ModalHeader>
				<ModalBody className="max-h-full h-64 overflow-scroll overflow-x-hidden">
					<img
						src="https://windmillui.com/img/forest.jpeg"
						className="w-full"
					/>
				</ModalBody>
				<ModalFooter>
					<Button
						className="w-full sm:w-auto"
						layout="outline"
						onClick={closeModal}
					>
						Cancel
					</Button>
					<Button className="w-full sm:w-auto">Accept</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}

export default Forms;
