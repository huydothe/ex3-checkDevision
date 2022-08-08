async function getDivision(num1, num2){
    if(num2 !==0 ){
        return num1/num2;
    }
    return new Error("Num2 equal 0");
}

async function checkDivision(){
    try{
        let result = await getDivision(2,10);
        console.log(result);
    }catch (error){
        console.log(error.message)
    }
}

checkDivision();