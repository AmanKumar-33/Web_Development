// write an function for asyn of callback
function dosomethingAsyn(callback){
    setTimeout(function(){callback(1)
        
    },10000);
}
dosomethingAsyn(console.log)