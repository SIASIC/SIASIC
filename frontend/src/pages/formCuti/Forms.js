import React from "react";

import CTA from "../../components/CTA";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Input, Button, Label, Select, Textarea } from "@windmill/react-ui";

import { MailIcon } from "../../icons";
import Buttons from "../Buttons";

function Forms() {
	return (
		<>
			<PageTitle>Tambah Form Cuti</PageTitle>

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

      <SectionTitle>Upload File Persyaratan</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <center>File Pond</center>
      </div>

			<Button>
				<span>Submit Form</span>
			</Button>
		</>
	);
}

export default Forms;
