// arrow function 
const calcAverage = (fscore,sscore,tscore) => (fscore + sscore + tscore) /3;


function checkWinner(){
    const avgDolhins = calcAverage(44,23,71);
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