import React, { useState } from "react";
import ReactDOM from "react-dom";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Input, Button, Label, Select, Textarea } from "@windmill/react-ui";

import Buttons from "../Buttons";

function Forms() {
	const [files, setFiles] = useState([]);

	return (
		<>
			<PageTitle>Lihat/Ubah Jenis Cuti</PageTitle>

			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<Label>
					<span>Nama Cuti</span>
					<Input className="mt-1" placeholder="Jane Doe" autofocus/>
				</Label>
				<Label className="mt-4">
					<span>Jenis cuti</span>
					<Textarea
						className="mt-1"
						rows="3"
						placeholder="Enter some long form content."
					/>
				</Label>

				<Label className="mt-4">
					<span>Jatah</span>
					<Input className="mt-1" placeholder="120" type="number"/>
				</Label>

				<Label className="mt-4">
					<span>Pejabat Bersangkutan</span>
					<Input className="mt-1" placeholder="nip pejabat" list="pejabatList"/>
				</Label>

			</div>

			<datalist id="pejabatList">
				<option value="Edge" />
				<option value="Firefox" />
				<option value="Chrome" />
				<option value="Opera" />
				<option value="Safari" />
			</datalist>

			<Button className="mb-4">
				<span>Ubah Jenis Cuti</span>
			</Button>

			<div className="my-8"></div>
		</>
	);
}

export default Forms;
