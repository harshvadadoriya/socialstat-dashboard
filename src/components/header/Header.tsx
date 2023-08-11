import React from 'react';
import { GoSearch } from 'react-icons/go';
import { BiSolidDownArrow } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Header = () => {
	return (
		<div className="flex justify-between p-4">
			<form className="flex-1">
				<label htmlFor="search" className="sr-only">
					Search
				</label>
				<div className="relative md:w-[40%] sm:w-[95%]">
					<input
						type="text"
						id="voice-search"
						className="bg-gray-50 border border-gray-200 outline-none text-gray-900 text-sm rounded-lg focus:border-gray-200 block w-full pl-4 p-2.5"
						placeholder="Search"
						required
					/>
					<button
						type="button"
						className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
					>
						<GoSearch />
					</button>
				</div>
			</form>
			<div className="flex items-center space-x-14">
				<div className="group inline-block">
					<button className="outline-none rounded-md focus:outline-none border px-3 py-1 bg-white flex items-center min-w-[9rem]">
						<span className="pr-1 font-semibold flex-1">PewDiePie</span>
						<BiSolidDownArrow className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" />
					</button>
					<ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-[9rem]">
						<li className="rounded-sm px-3 py-1 hover:bg-gray-100">
							Discovery
						</li>
						<li className="rounded-sm px-3 py-1 hover:bg-gray-100">T-Series</li>
						<li className="rounded-sm px-3 py-1 hover:bg-gray-100">Sony</li>
						<li className="rounded-sm px-3 py-1 hover:bg-gray-100">Marvel</li>
					</ul>
				</div>
				<div className="flex items-center space-x-4">
					<div className="relative">
						<button className="bg-white p-2 rounded-full">
							<IoMdNotificationsOutline size={23} />
						</button>
						<span className="absolute top-[0.7rem] right-[0.8rem] h-[0.4rem] w-[0.4rem] bg-primary-red-dark rounded-full"></span>
					</div>

					<div>
						<button className="bg-white p-2 rounded-full">
							<AiOutlineSetting size={20} />
						</button>
					</div>
					<div className="relative h-8 w-8 cursor-pointer">
						<img
							className="h-full w-full rounded-full object-cover object-center"
							src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
