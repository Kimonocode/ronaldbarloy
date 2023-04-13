import 'normalize.css';
import '../css/index.scss';
import mobileIland1Img from '../assets/iland1-mobile.png';
import mobileIland2Img from '../assets/iland2-mobile.png';
import heroBanner from '../assets/herobanner.png';
import workItem1Img from '../assets/work1.png';
import workItem2Img from '../assets/work2.png';
import workItem3Img from '../assets/work3.png';
import folderIcon from '../assets/folder.svg';

const pictures = document.getElementsByTagName('img');

pictures.namedItem('heroBanner')!.src = heroBanner;
pictures.namedItem('mobileIland1Img')!.src = mobileIland1Img;
pictures.namedItem('mobileIland2Img')!.src = mobileIland2Img;
pictures.namedItem('workItem1')!.src = workItem1Img;
pictures.namedItem('workItem2')!.src = workItem2Img;
pictures.namedItem('workItem3')!.src = workItem3Img;
pictures.namedItem('folderIcon')!.src = folderIcon;