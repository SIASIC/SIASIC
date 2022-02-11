import React, { useState, useEffect, useContext } from "react";

import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon, HeartIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import { Card, CardBody } from "@windmill/react-ui";
import {
	TableBody,
	TableContainer,
	Table,
	TableHeader,
	TableCell,
	TableRow,
	TableFooter,
	Avatar,
	Badge,
	Pagination,
} from "@windmill/react-ui";

import {
	doughnutOptions,
	lineOptions,
	doughnutLegends,
	lineLegends,
} from "../utils/demo/chartsData";
import AuthContext from "../context/AuthContext";

function Dashboard({ authuser }) {
	const [page, setPage] = useState(1);
	const [data, setData] = useState([]);

	// pagination setup
	const resultsPerPage = 10;
	const totalResults = response.length;

	// pagination change control
	function onPageChange(p) {
		setPage(p);
	}

	// on page change, load new sliced data
	// here you would make another server request for new data
	useEffect(() => {
		setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
	}, [page]);

	let { user } = useContext(AuthContext);

	return (
		<>
			<PageTitle>Dashboard</PageTitle>

			{/* <!-- User Card --> */}
			<div className="mb-8">
				<InfoCard title={authuser.role} value={user.username}>
					<RoundIcon
						icon={HeartIcon}
						iconColorClass="text-red-500 dark:text-red-100"
						bgColorClass="bg-red-100 dark:bg-red-500"
						className="mr-4"
					/>
				</InfoCard>
			</div>

			<div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
				{/* Card count */}
				<div className="col-span-2">
					<div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
						<InfoCard title="Jumlah Cuti Hari Ini" value="12">
							<RoundIcon
								icon={MoneyIcon}
								iconColorClass="text-green-500 dark:text-green-100"
								bgColorClass="bg-green-100 dark:bg-green-500"
								className="mr-4"
							/>
						</InfoCard>

						<InfoCard title="Jumlah Cuti Kemarin" value="6389">
							<RoundIcon
								icon={PeopleIcon}
								iconColorClass="text-orange-500 dark:text-orange-100"
								bgColorClass="bg-orange-100 dark:bg-orange-500"
								className="mr-4"
							/>
						</InfoCard>
					</div>
					<div className="gap-6">
						<ChartCard title="Trafik cuti">
							<Line {...lineOptions} />
							<ChartLegend legends={lineLegends} />
						</ChartCard>
					</div>
				</div>

				{/* 
					Admin: Form Terbaru
					Atasan/Bapeg : Form selesai diproses terbaru
					Pejabat : Form Terbaru yang bersangkutan
				*/}
				<TableContainer>
					<Table>
						<TableHeader>
							<tr>
								<TableCell>PNS</TableCell>
								<TableCell>Action</TableCell>
							</tr>
						</TableHeader>
						<TableBody>
							{data.map((user, i) => (
								<TableRow key={i}>
									<TableCell>
										<div className="flex items-center text-sm">
											{/* <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" /> */}
											<div>
												<p className="font-semibold">{user.name}</p>
												<p className="text-xs text-gray-600 dark:text-gray-400">
													{user.job}
												</p>
											</div>
										</div>
									</TableCell>

									<TableCell>
										<Badge type={user.status}>{user.status}</Badge>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<TableFooter>
						<Pagination
							totalResults={totalResults}
							resultsPerPage={5}
							label="Table navigation"
							onChange={onPageChange}
						/>
					</TableFooter>
				</TableContainer>
			</div>

			<PageTitle>Semua Form Cuti</PageTitle>
			<div className="mb-8">

				{/* 
					Admin: Form order latest
					Atasan/Bapeg : Form menunggu balasan
					Pejabat : Form belum dibaca & form belum diproses
				*/}
				<TableContainer>
					<Table>
						<TableHeader>
							<tr>
								<TableCell>PNS</TableCell>
								<TableCell>Unit Kerja</TableCell>
								<TableCell>Jenis Cuti</TableCell>
								<TableCell>Alasan</TableCell>
								<TableCell>Action</TableCell>
							</tr>
						</TableHeader>
						<TableBody>
							{data.map((user, i) => (
								<TableRow key={i}>
									<TableCell>
										<div className="flex items-center text-sm">
											{/* <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" /> */}
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
										<span className="text-sm">$ {user.amount}</span>
									</TableCell>
									<TableCell>
										<span className="text-sm">
											{new Date(user.date).toLocaleDateString()}
										</span>
									</TableCell>
									<TableCell>
										<Badge type={user.status}>{user.status}</Badge>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<TableFooter>
						<Pagination
							totalResults={totalResults}
							resultsPerPage={resultsPerPage}
							label="Table navigation"
							onChange={onPageChange}
						/>
					</TableFooter>
				</TableContainer>
			</div>
		</>
	);
}

export default Dashboard;
