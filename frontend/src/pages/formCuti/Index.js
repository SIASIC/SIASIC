import React, { useState, useEffect } from "react";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
	Table,
	TableHeader,
	TableCell,
	TableBody,
	TableRow,
	TableFooter,
	TableContainer,
	Badge,
	Avatar,
	Button,
	Pagination,
	Label,
	Input,
	Dropdown,
	DropdownItem,
	Select,
	Textarea,
} from "@windmill/react-ui";
import { EditIcon, TrashIcon, PlusIcon, FilterIcon } from "../../icons";

import response from "../../utils/demo/tableData";
import { Link } from "react-router-dom";
// make a copy of the data, for the second table
const response2 = response.concat([]);

function Tables() {
	/**
	 * DISCLAIMER: This code could be badly improved, but for the sake of the example
	 * and readability, all the logic for both table are here.
	 * You would be better served by dividing each table in its own
	 * component, like Table(?) and TableWithActions(?) hiding the
	 * presentation details away from the page view.
	 */

	const [isMenuAksiOpen, setIsMenuAksiOpen] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState("hidden");

	function handlerMenuAksiClick() {
		setIsMenuAksiOpen(!isMenuAksiOpen);
	}

	function handlerFilterClick() {
		if (isFilterOpen == "hidden") {
			setIsFilterOpen("");
		} else {
			setIsFilterOpen("hidden");
		}
		// setIsFilterOpen(!isFilterOpen);
		// console.log(isFilterOpen);
	}

	// setup pages control for every table
	const [pageTable1, setPageTable1] = useState(1);
	const [pageTable2, setPageTable2] = useState(1);

	// setup data for every table
	const [dataTable1, setDataTable1] = useState([]);
	const [dataTable2, setDataTable2] = useState([]);

	// pagination setup
	const resultsPerPage = 10;
	const totalResults = response.length;

	// pagination change control
	function onPageChangeTable1(p) {
		setPageTable1(p);
	}

	// pagination change control
	function onPageChangeTable2(p) {
		setPageTable2(p);
	}

	// on page change, load new sliced data
	// here you would make another server request for new data
	useEffect(() => {
		setDataTable1(
			response.slice(
				(pageTable1 - 1) * resultsPerPage,
				pageTable1 * resultsPerPage
			)
		);
	}, [pageTable1]);

	// on page change, load new sliced data
	// here you would make another server request for new data
	useEffect(() => {
		setDataTable2(
			response2.slice(
				(pageTable2 - 1) * resultsPerPage,
				pageTable2 * resultsPerPage
			)
		);
	}, [pageTable2]);

	return (
		<>
			<PageTitle>Form Cuti</PageTitle>

			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
				<Label>
					<span>Cari Form</span>
					<div className="relative text-gray-500 focus-within:text-purple-600">
						<input
							className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
							placeholder="Jane Doe"
						/>
						<button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
							Click
						</button>
					</div>
				</Label>

				<div className="relative">
					<Button iconLeft={EditIcon} onClick={handlerMenuAksiClick}>
						<span>Aksi Terpilih</span>
					</Button>

					<Dropdown
						align="right"
						isOpen={isMenuAksiOpen}
						onClose={() => setIsMenuAksiOpen(false)}
					>
						<DropdownItem tag="a" href="#" className="justify-between">
							<span>Hapus</span>
						</DropdownItem>
						<DropdownItem tag="a" href="#" className="justify-between">
							<span>Disetujui</span>
						</DropdownItem>
						<DropdownItem tag="a" href="#" className="justify-between">
							<span>Perubahan</span>
						</DropdownItem>
						<DropdownItem tag="a" href="#" className="justify-between">
							<span>Ditangguhkan</span>
						</DropdownItem>
						<DropdownItem onClick={() => alert("Alerts!")}>
							<span>Tidak disetujui</span>
						</DropdownItem>
					</Dropdown>
				</div>
				<div>
					<Button
						iconLeft={FilterIcon}
						onClick={handlerFilterClick}
						className="fill-current"
					>
						<span>Filter</span>
					</Button>
				</div>
				<div>
					<Link to="/app/form-cuti/add">
						<Button iconLeft={PlusIcon} className="fill-current">
							<span>Tambah</span>
						</Button>
					</Link>
				</div>
			</div>

			<div
				className={`px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 ${isFilterOpen}`}
			>
				<Label>
					<span>Name</span>
					<Input className="mt-1" placeholder="Jane Doe" />
				</Label>

				<Label className="mt-4">
					<span>Disabled</span>
					<Input disabled className="mt-1" placeholder="Jane Doe" />
				</Label>

				<div className="mt-4">
					{/* TODO: Check if this label is accessible, or fallback */}
					{/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
					<Label>Account Type</Label>
					<div className="mt-2">
						<Label radio>
							<Input type="radio" value="personal" name="accountType" />
							<span className="ml-2">Personal</span>
						</Label>
						<Label className="ml-6" radio>
							<Input type="radio" value="business" name="accountType" />
							<span className="ml-2">Business</span>
						</Label>
						<Label disabled className="ml-6" radio>
							<Input
								disabled
								type="radio"
								value="disabled"
								name="accountType"
							/>
							<span className="ml-2">Disabled</span>
						</Label>
					</div>
				</div>

				<Label className="mt-4">
					<span>Requested Limit</span>
					<Select className="mt-1">
						<option>$1,000</option>
						<option>$5,000</option>
						<option>$10,000</option>
						<option>$25,000</option>
					</Select>
				</Label>

				<Label className="mt-4">
					<span>Multiselect</span>
					<Select className="mt-1" multiple>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
						<option>Option 4</option>
						<option>Option 5</option>
					</Select>
				</Label>

				<Label className="mt-4">
					<span>Message</span>
					<Textarea
						className="mt-1"
						rows="3"
						placeholder="Enter some long form content."
					/>
				</Label>

				<Label className="mt-6" check>
					<Input type="checkbox" />
					<span className="ml-2">
						I agree to the <span className="underline">privacy policy</span>
					</span>
				</Label>
			</div>

			{/* <SectionTitle>Table with actions</SectionTitle> */}
			<TableContainer className="mb-8">
				<Table>
					<TableHeader>
						<tr>
							<TableCell></TableCell>
							<TableCell>PNS</TableCell>
							<TableCell>Unit Kerja</TableCell>
							<TableCell>Jenis Cuti</TableCell>
							<TableCell>Alasan</TableCell>
							<TableCell>Action</TableCell>
						</tr>
					</TableHeader>
					<TableBody>
						{dataTable2.map((user, i) => (
							<TableRow key={i}>
								<TableCell>
									<Input type="checkbox" />
								</TableCell>
								<TableCell>
									<div className="flex items-center text-sm">
										{/* <Avatar
											className="hidden mr-3 md:block"
											src={user.avatar}
											alt="User avatar"
										/> */}
										<div>
											<p className="font-semibold">{user.name}</p>
											<p className="text-xs text-gray-600 dark:text-gray-400">
												{user.job}
											</p>
										</div>
									</div>
								</TableCell>
								<TableCell>
									<span className="text-sm">$ {user.amount}</span>
								</TableCell>
								<TableCell>
									<Badge type={user.status}>{user.status}</Badge>
								</TableCell>
								<TableCell>
									<span className="text-sm">
										{new Date(user.date).toLocaleDateString()}
									</span>
								</TableCell>
								<TableCell>
									<div className="flex items-center space-x-4">
										<Link to="/app/form-cuti/edit">
											<Button layout="link" size="icon" aria-label="Edit">
												<EditIcon className="w-5 h-5" aria-hidden="true" />
											</Button>
										</Link>

										<Button layout="link" size="icon" aria-label="Delete">
											<TrashIcon className="w-5 h-5" aria-hidden="true" />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<TableFooter>
					<Pagination
						totalResults={totalResults}
						resultsPerPage={resultsPerPage}
						onChange={onPageChangeTable2}
						label="Table navigation"
					/>
				</TableFooter>
			</TableContainer>
		</>
	);
}

export default Tables;
