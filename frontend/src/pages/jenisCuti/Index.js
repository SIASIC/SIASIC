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
			<PageTitle>Jenis Cuti</PageTitle>

			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
				<Label>
					<span>Cari Jenis Cuti</span>
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

				<div>
					<Link to="/app/jenis-cuti/add">
						<Button iconLeft={PlusIcon} className="fill-current">
							<span>Tambah</span>
						</Button>
					</Link>
				</div>
			</div>

			{/* <SectionTitle>Table with actions</SectionTitle> */}
			<TableContainer className="mb-8">
				<Table>
					<TableHeader>
						<tr>
							<TableCell>Jenis Cuti</TableCell>
							<TableCell>Persyaratan</TableCell>
							<TableCell>Jatah (hari)</TableCell>
							<TableCell>Pejabat Bersangkutan</TableCell>
							<TableCell>Action</TableCell>
						</tr>
					</TableHeader>
					<TableBody>
						{dataTable2.map((user, i) => (
							<TableRow key={i}>
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
										<Link to="/app/jenis-cuti/edit">
											<Button layout="link" size="icon" aria-label="Edit">
												<EditIcon className="w-5 h-5" aria-hidden="true" />
											</Button>
										</Link>

										<Button layout="link" size="icon" aria-label="Delete" onClick={() => alert('Data ini akan dihapus!')}>
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
