let genderConst;
let age;
let height;
let weight;
let activityRatio;

function CountCalorieNorm(genderConst, age, height, weight, activityRatio) {
    return ((10 * weight) + (6.25 * height) - (5 * age) + genderConst) * activityRatio;
}

function DefineParameters() {
    if (document.getElementById('gender__male').checked) {
        genderConst = 5;
    } else {
        genderConst = -161;
    }

    age = document.getElementById('age').value;
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;

    let activities = document.getElementsByName('activity');
    activities.forEach(activity => {
        if (activity.checked) {
            activityRatio = activity.value;
        }
    });
}

function FillCalorieNorms() {
    let calorieNorms = document.querySelectorAll('.calories__norm');
    let calorieNorm = CountCalorieNorm(genderConst, age, height, weight, activityRatio);
    calorieNorms[0].textContent = Math.round(calorieNorm);
    calorieNorms[1].textContent = Math.round(calorieNorm * 0.85);
    calorieNorms[2].textContent = Math.round(calorieNorm * 1.15);
}

function ShowCounterResult(params) {
    document.querySelector('.counter__result').style.display = "block";
    document.querySelector('.counter__result').scrollIntoView({behavior: 'smooth'});
}

function HideCounterResult(params) {
    document.querySelector('.counter__result').style.display = "none";
    document.querySelector('.counter').scrollIntoView({behavior: 'smooth'});
}

document.querySelector('.form__submit-button').onclick = function() {
    DefineParameters();
    FillCalorieNorms();
    ShowCounterResult();
}

document.querySelector('.form__reset-button').onclick = function() {
    HideCounterResult();
}

// if (document.getElementById('age').value == '') {
//     alert('hey');
// }

// DefineParameters();
// console.log(document.querySelector('.form__submit-button').textContent)


// console.log(CountCalorieNorm(genderConst, age, height, weight, activityRatio));