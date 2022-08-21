import {
    MdOutlineApartment,
    MdHouseSiding,
    MdOutlineWater,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
    GiKidSlide,
    GiSpaceNeedle,
    GiCampingTent,
    GiLightningDome,
    GiEvilTree,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground } from 'react-icons/fa';

export const locationsTab = [
    { id: 1, label: 'اجتماعی', icon: <MdOutlineApartment size={24} /> },
    { id: 2, label: 'کلاسیک', icon: <BsSnow size={24} /> },
    { id: 3, label: 'ترسناک', icon: <MdHouseSiding size={24} /> },
    { id: 4, label: 'ماجراجویی', icon: <MdOutlineWater size={24} /> },
    { id: 5, label: 'کمدی', icon: <GiKidSlide size={24} /> },
    { id: 6, label: 'درام', icon: <AiOutlineCoffee size={24} /> },
    { id: 7, label: 'فانتزی', icon: <GiSpaceNeedle size={24} /> },
    { id: 8, label: 'علمی تخیلی', icon: <FaCampground size={24} /> },
    { id: 9, label: 'دلهره‌آور', icon: <GiCampingTent size={24} /> },
    { id: 10, label: 'وسترن', icon: <GiLightningDome size={24} /> },
    { id: 11, label: 'ایرانی', icon: <BiHomeAlt size={24} /> },
    { id: 12, label: 'خارجی', icon: <GiEvilTree size={24} /> },
];