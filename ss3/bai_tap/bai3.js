async function findMaxValue(array) {
    if (typeof array =="object"){
        try {
            let max = array[0];
            for (const e of array) {
                if (max < e) {
                    max = e;
                }
            }
            return max;
        } catch (e) {
            throw new Error("Error")
        }
    }else {
        throw new Error("Sai dữ liệu đầu vào1")
    }

}

async function run(array) {
    try {
        let result = await findMaxValue(array);
        console.log(`Kết quả ${result}`)
    } catch (error) {
        console.log(error);
    } finally {
        console.log("End");
    }
}
run("1111");