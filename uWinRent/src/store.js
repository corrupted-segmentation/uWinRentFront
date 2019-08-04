import {writable} from 'svelte/store';

export const address = createAdd();
export const price = createPrice();

function createPrice(){
    const {subscribe, set, update} = writable(50);

    return {
        subscribe,
        change: (n) => {set(n)}
    }
}

function createAdd(){
    const {subscribe, set, update} = writable("World");

    return {
        subscribe,
        change: (n) => {set(n)}
    }
}



