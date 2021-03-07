import click from '../assets/audio/click.wav';
import hover from '../assets/audio/hover.wav';
import negative from '../assets/audio/negative.wav';
import positive from '../assets/audio/positive.wav';
import tied from '..//assets/audio/tied.wav';

export const clickSound = new Audio(click);
 
export const hoverSound = new Audio(hover);

export const lossSound = new Audio(negative);
 
export const winSound = new Audio(positive);
 
export const tieSound = new Audio(tied);