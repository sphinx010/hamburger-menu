//togle function with the css active class for state handling
const checkBox = document.getElementById('checkbox');
const xEffect = document.querySelector('.ham');
const navSpace = document.querySelector('.nav');

checkBox.addEventListener('change', function() {
    if(this.checked){
        xEffect.classList.add('active');
        navSpace.classList.add('active');
    }else{
        xEffect.classList.remove('active');
        navSpace.classList.remove('active');
    }
    
});
