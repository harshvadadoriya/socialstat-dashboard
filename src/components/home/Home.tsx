import React from 'react';
import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiFillYoutube,
	AiOutlinePlus,
} from 'react-icons/ai';
import { PiDribbbleLogoFill } from 'react-icons/pi';
import { BsFacebook } from 'react-icons/bs';

const Home = () => {
	return (
		<div className="p-3 h-[8rem] flex text-center">
			<div className="w-full flex justify-center items-center hover:bg-primary-red-dark hover:text-white cursor-pointer rounded-lg">
				<div className="flex flex-col items-center ">
					<AiOutlinePlus size={25} />
					<p className="">ADD</p>
				</div>
			</div>
			<div className="w-full flex justify-center items-center hover:bg-primary-red-dark hover:text-white cursor-pointer rounded-lg">
				<div className="flex flex-col items-center">
					<PiDribbbleLogoFill size={25} />
					<p className="">DRIBBBLE</p>
				</div>
			</div>
			<div className="w-full flex justify-center items-center hover:bg-primary-red-dark hover:text-white cursor-pointer rounded-lg">
				<div className="flex flex-col items-center">
					<AiFillInstagram size={25} />
					<p className="">INSTAGRAM</p>
				</div>
			</div>
			<div className="w-full flex justify-center items-center hover:bg-primary-red-dark hover:text-white cursor-pointer rounded-lg">
				<div className="flex flex-col items-center">
					<AiFillYoutube size={25} />
					<p className="">YOUTUBE</p>
				</div>
			</div>
			<div className="w-full flex justify-center items-center hover:bg-primary-red-dark hover:text-white cursor-pointer rounded-lg">
				<div className="flex flex-col items-center">
					{' '}
					<BsFacebook size={25} />
					<p className="">FACEBOOK</p>
				</div>
			</div>
			<div className="w-full flex justify-center items-center hover:bg-primary-red-dark hover:text-white cursor-pointer rounded-lg">
				<div className="flex flex-col items-center">
					{' '}
					<AiOutlineTwitter size={25} />
					<p className="">TWITTER</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
