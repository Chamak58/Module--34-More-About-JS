const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if(success <= 0.5){
            resolve (success)
        }
        else{
            reject(success)
        }
    })

    
}

myLoader()
.then(data => console.log('resolved data with', data))
.catch(error => console.log('rejected data with', error))


//fetch structure with than (less used)
fetch('')
    .than(res => res.json())
    .than(data => console.log(data))
    .catch(error => console.log(error))

//fetch structure with async function (mostly used in future)
async function loadData(){
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

//fetch structure with array function (mostly used in future)
const taskLoader = async() => {
    const res = await fetch('');
}

loadData();

    
