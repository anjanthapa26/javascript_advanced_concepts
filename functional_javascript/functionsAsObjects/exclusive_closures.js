function x() {
    function close(i) {
        setTimeout(function() {
            console.log(i)
        },i * 1000);
    }
    for(var i=1; i <=5; i++) {
        close(i)
    }
    console.log('Namaste javascript');
}

x();