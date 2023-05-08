const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error("I am sad"));
            }
        }, 2000);
    });
};
const prompt = require("prompt-sync")();
let statusKayo = prompt("tình trạng của Kayo?");
onMyBirthday(statusKayo)
    .then((result) => {
        console.log(`I have ${result} cakes`); // In the console: I have 2 cakes
    })
    .catch((error) => {
        console.log(error); // Does not run
    })
    .finally(() => {
        console.log("Party"); // Shows in the console no matter what: Party
    });