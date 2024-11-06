var timerId;

function start() {
    if (timerId){
        return;
    }
    timerId = setTimeout(function () {
        console.clear();
        console.log(new Date().toLocaleString());
    }, 1000);
}
function stop(){
    clearInterval(timerId);
    timerId = null;
}