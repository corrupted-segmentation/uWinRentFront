import {writable} from 'svelte/store';

export const name = createName();
export const price = createPrice();

function createPrice(){
    const {subscribe, set, update} = writable(50);

    return {
        subscribe,
        change: (n) => {set(n)}
    }
}

function createName(){
    const {subscribe, set, update} = writable("World");

    return {
        subscribe,
        change: (n) => {set(n)}
    }
}



