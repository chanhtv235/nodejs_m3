async function findMaxValue(array) {
    try {
        let max = array[0];
        for (const e of array) {
            if (max < e) {
                max = e;
            }
        }
        return max;
    } catch (e) {
        throw new Error("I am sad")
    }
}

async function run() {
    try {
        let result = await findMaxValue("[1, 2, 3]");
        console.log(`Kết quả ${result}`)
    } catch (error) {
        console.log(error);
    } finally {
        console.log("End");
    }
}
run();