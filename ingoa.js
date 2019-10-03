on('playerConnecting', (name, setKickReason, deferrals) => {
    deferrals.defer()
    let ingoa = name.split('').filter(function (x) {
        var n = x.charCodeAt(0);
        return 31 < n && 127 > n;
    }).join('');
    if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(ingoa)) { 
        deferrals.done('Your Name Contains Special Characters. Pls Remove Them.')
    }
    else {
        deferrals.done()
    }
});
