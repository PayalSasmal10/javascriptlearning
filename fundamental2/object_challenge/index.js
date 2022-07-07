
const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function() {
       let  bmi = (this.mass / this.height ** 2);
        console.log("Started learning");
        return bmi;
    }
}

const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.95,
    calcBMI: function() {
        return (this.mass / this.height ** 2);
    }
}



if (john.calcBMI() > mark.calcBMI()){
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`)

}else{
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName()}'s (${mark.calcBMI()})!`)

}