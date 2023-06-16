import {v4 as uuidv4} from 'uuid';
import './styles/main.scss';
import tree from './assets/tree.jpg';
import {
    buildErrorMessage, 
    buildInfoMessage, 
    buildWarningMessage,
    generate
} from "./helpers";

const treeImg = document.getElementById("treeImg");
treeImg.src = tree;

generate();
