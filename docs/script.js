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
let myWorkout = [];
let i = 0;

function Workout(leg,load,thumb)
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

function submitClick() {
    if(inputLeg.value == '' || inputLoad.value == '' || inputThumb.value == '') return;


    let workout  = new Workout(inputLeg.value,inputLoad.value,inputThumb.value);
    myWorkout.push(workout);
    
    inputs.innerHTML = '';
    inputLeg.value = '';
    inputLoad.value = '';
    inputThumb.value = '';

    values = myWorkout[i].info().split(',');
    workoutDisp = document.createElement('div');
    workoutDisp.classList.add('workout');
    workoutDisp.setAttribute('id',`th${i}`)
    values.forEach((value) => {
        workoutDisp.innerHTML += `${ value } <br> <br>`
    });

    rmvBtn = document.createElement('button');
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

function rmvWorkout(e) {
    myWorkout.splice(e.target.parentElement.parentElement.id,1);
    
    e.target.parentElement.parentElement.remove();
    e.target.parentElement.innerHTML = '';
    i--;
}

submit.addEventListener('click', submitClick);

addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addWorkout);
