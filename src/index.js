import './styles.css';
import image from './image.jpg';
import _ from 'lodash';

const img = document.createElement('img');
img.src = image;
document.body.appendChild(img);

const msg = _.join(['Привіт', 'світе!'], ' ');
document.body.append(msg);