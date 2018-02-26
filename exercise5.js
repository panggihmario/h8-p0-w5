function attack (damage) {
    // Code disini
    damage =2
    var serang=damage
    return serang
  }
  // console.log(attack())
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
  var i=attack()
  var hasil=(damagePerAttack-i) *numberOfAttacks
  return hasil
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90