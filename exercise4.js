function graduates (students) {
    // Code disini
    var arrClass=[]
    for(var i=0;i<students.length;i++){
        // arrScore.push(students[i].score)
        arrClass.push(students[i].class)
        
    }
    
   
var objResult={}
var objHasil={}
var arrHasil=[]
var arrBaru=[]
for(var l=0;l<arrClass.length;l++){
    for(var m=0; m<students.length;m++){
        if(arrClass[l]=== students[m].class){
            if(students[m].score>75){
                // highScore=students[m].score
                //ngecek nilai yang paling tinggi
                objResult.name=students[m].name
                objResult.score=students[m].score
                arrHasil.push(objResult)
            }
            
        }
        objResult={}
    }
        objHasil[arrClass[l]]=arrHasil
        arrHasil=[] 
}
return objHasil

  }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  