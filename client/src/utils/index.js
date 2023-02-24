import { surpriseMePrompts } from '../constants';
import Filesaver from 'file-saver'

export function getRandomPrompt(prompt) {
    // this adds an index to each element in the 'surpriseMePrompts' array and then randomly multiples the index. 
    const randomIndex = Math.floor(Math.random() *
   surpriseMePrompts.length );
   
   const randomPrompt = surpriseMePrompts[randomIndex]; 
    // takes the random index/number and returns it as the prompt associated with the index. 
   if(randomPrompt === prompt) return getRandomPrompt(prompt)
// checks to make sure you don't get the same prompt twice
   return randomPrompt;
}

export async function downloadImage(_id, photo) {
   Filesaver.saveAs(photo, `download-${_id}.jpg`)
}