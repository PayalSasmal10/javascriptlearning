// 1st Way
// arrow function 
const calcAverage = (fscore,sscore,tscore) =>{
    const resultAvg = (fscore + sscore + tscore) /3;
    console.log(resultAvg);
    return resultAvg;
}


function checkWinner(){
    const avgDolhins = calcAverage(44,2,3);
    const avgKoalas  = calcAverage(65,54,49);
    if (avgDolhins > avgKoalas){
        console.log("Dolhins win ("+avgDolhins+ ' vs. '+avgKoalas+')');
    }else if(avgDolhins === avgKoalas){
        console.log("It's a Draw");
    }
    else if(avgKoalas > avgDolhins){
        console.log("Koalas win ("+avgDolhins+ ' vs. '+avgKoalas+')');
    }
}

checkWinner();


// 2nd way to do it.
console.log("##########################################################");

const calcAverage1 = (fs, ss, ts)=> (fs+ss+ts) /3 ;
console.log(calcAverage1(12, 13, 45));

// TEST1
const scoreKoalas = calcAverage1(44,23,71);
const scoreDolhins = calcAverage1(65, 54, 49);
console.log(scoreKoalas, scoreDolhins);



const checkWinner1 = function (avgDolhins1, avgKoalas1){
    if (avgDolhins1 >= 2* avgKoalas1){
        console.log(`Dolhins win (${avgDolhins1} vs. ${avgKoalas1})`);
    }else if(avgDolhins1 <= 2* avgKoalas1){
        console.log(`Koalas win (${avgKoalas1} vs. ${avgDolhins1})`);
    }
    else{
        console.log(`it's a draw`);
    }
}

checkWinner1(scoreDolhins, scoreKoalas);
checkWinner1(788,122);

// TEST2
