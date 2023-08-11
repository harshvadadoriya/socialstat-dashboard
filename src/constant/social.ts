import {
	AiFillInstagram,
	AiOutlineTwitter,
	AiFillYoutube,
	AiOutlinePlus,
} from 'react-icons/ai';
import { PiDribbbleLogoFill } from 'react-icons/pi';
import { BsFacebook } from 'react-icons/bs';
import { SocialItem } from '../interface/interface';

const socialData: SocialItem[] = [
	{ id: 1, name: 'ADD', icon: AiOutlinePlus },
	{ id: 2, name: 'DRIBBBLE', icon: PiDribbbleLogoFill },
	{ id: 3, name: 'INSTAGRAM', icon: AiFillInstagram },
	{ id: 4, name: 'YOUTUBE', icon: AiFillYoutube },
	{ id: 5, name: 'FACEBOOK', icon: BsFacebook },
	{ id: 6, name: 'TWITTER', icon: AiOutlineTwitter },
];

export default socialData;
