function highestScore (students) {
var arrScore=[]
var obj={}
var arrClass=[]

for(var i=0;i<students.length;i++){
    // arrScore.push(students[i].score)
    arrClass.push(students[i].class)
    
}

for(var j=0;j<arrClass.length;j++){
    for(var k=0;k<arrClass.length;k++){
        if(arrClass[j]===arrClass[k] && j !==k){
            arrClass.splice(k,1)
        }
    }
}

var highScore=0
var objResult={}
var objHasil={}
for(var l=0;l<arrClass.length;l++){
    for(var m=0; m<students.length;m++){
        if(arrClass[l]=== students[m].class){
            if(highScore<students[m].score){
                highScore=students[m].score
                //ngecek nilai yang paling tinggi
                objResult.name=students[m].name
                objResult.score=students[m].score
            }
        }
    }
    highScore=0
    //untuk reset nilai biar ketimpa
    objHasil[arrClass[l]]=objResult
    objResult={}
    //untuk reset ob
}

return objHasil

  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
//   console.log(highestScore([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
//   ]));
  
//   // {
//   //   foxes: { name: 'Alexander', score: 100 },
//   //   wolves: { name: 'Alisa', score: 76 },
//   //   tigers: { name: 'Viktor', score: 80 }
//   // }
  
  
//   console.log(highestScore([])); //{}