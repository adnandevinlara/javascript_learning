export let message = 'message from library';

export function user(props){
    return `Hello ${props}`;
}

export class test{
    constructor(){
        console.log('Constructor Method Call');
    }
}

// export all properties in one line
// export {message,user,test};