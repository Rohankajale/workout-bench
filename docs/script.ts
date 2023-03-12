let inputLeg = document.createElement('input');
inputLeg.type = 'text';
inputLeg.placeholder = 'Leg';

let inputLoad = document.createElement('input');
inputLoad.type = 'text';
inputLoad.placeholder = 'Load';

let inputThumb  = document.createElement('input');
inputThumb.type = 'text';
inputThumb.placeholder = 'Thumb'

let submit = document.createElement('input');
submit.classList.add('sub');
submit.type = 'submit';

let workoutCont = document.querySelector('.maincontainer');
let myWorkout: any = [];
let i = 0;

function Workout(this: any, leg: string,load: string,thumb: string)
{
    this.leg = leg;
    this.load = load;
    this.thumb = thumb;

    this.info = function() {
        return leg + ',' + load + ',' + thumb;
    }
}

let inputs = document.querySelector("#addInputs")
function addWorkout(){
    inputs.appendChild(inputLeg);
    inputs.appendChild(inputLoad);
    inputs.appendChild(inputThumb);
    inputs.appendChild(submit);
}

interface Button<T> {
    type?: 'addBtn' | 'submitClick' | 'rmvWorkout';
}


function submitClick(): typeof submitClick{
    if(inputLeg.value == '' || inputLoad.value == '' || inputThumb.value == '') return;


    let workout  = new (Workout(inputLeg.value,inputLoad.value,inputThumb.value) as any);
    myWorkout.push(workout);
    
    inputs.innerHTML = '';
    inputLeg.value = '';
    inputLoad.value = '';
    inputThumb.value = '';

    const values = myWorkout[i].info().split(',');
    const workoutDisp = document.createElement('div');
    workoutDisp.classList.add('workout');
    workoutDisp.setAttribute('id',`th${i}`)
    values.forEach((value: any) => {
        workoutDisp.innerHTML += `${ value } <br> <br>`
    });

    const rmvBtn = document.createElement('button');
    rmvBtn.classList.add('rmvbtn')
    rmvBtn.innerHTML = 'Remove Workout';

    let rmvbtndiv = document.createElement('div');
    rmvbtndiv.classList.add('rmvbtndiv')

    rmvBtn.addEventListener('click', rmvWorkout);

    workoutDisp.appendChild(rmvbtndiv);
    workoutCont.appendChild(workoutDisp);
    rmvbtndiv.appendChild(rmvBtn);
    i++;
}

function rmvWorkout(e: any): typeof rmvWorkout{
    myWorkout.splice(e.target.parentElement.parentElement.id,1);
    e.target.parentElement.parentElement.remove();
    e.target.parentElement.innerHTML = '';
    i--;
    return;
}

submit.addEventListener('click', submitClick);

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addWorkout);
