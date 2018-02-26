function meleeRangedGrouping (str) {
    //your code here
    var melle=[]
    var range=[]
    var baru=''
    var final=[]
  var arr=str.split(',')
  if(str.length===0){
    return []
  }
  for( var i=0;i<arr.length;i++){
        if(arr[i] === arr[i].replace('-Ranged','')){
          melle.push(arr[i].replace('-Melee',''))
        }
        else{
          range.push(arr[i].replace('-Ranged',''))
        }
     
  }
   final.push(range,melle)
   return final
    
    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []