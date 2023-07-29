//togle function with the css active class for state handling
const checkBox = document.getElementById('checkbox');
const xEffect = g=document.querySelector('.ham');

checkBox.addEventListener('change', function() {
    if(this.checked){
        xEffect.classList.add('active');
    }else{
        xEffect.classList.remove('active');
    }
});
