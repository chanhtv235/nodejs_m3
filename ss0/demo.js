async function method1(n, callBack) {
    console.log("start");
        let s=0;
        for (let i = 0; i <10000000000 ; i++) {
            s++;
        }
    callBack(s);
    console.log("end");
}
 function callBack(s) {
     // setTimeout(()=>{
     //     console.log("doing")
     // },5000)

     console.log("doing")
     console.log("result " + s)
 }
method1(10,callBack);