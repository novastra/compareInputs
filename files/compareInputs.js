//A Q & D script to compare all inputs in pure JS with full refresh and return of changes
//You can reuse totally freely under License MIT from Novastra https://github.com/novastra/compareInputs 
//Made listening to Jabberwocky - Holding Up 


function getValues(){
  //create array of initial values
  formerValues = [];
  var x = document.querySelectorAll("input");
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].id != ""){
      formerValues.push({id: x[i].id, val: x[i].value});
    }
  }
}
window.onload = getValues;

function validate() {
  //create array of new values
  newValues = [];
  var x = document.querySelectorAll("input");
  var i;
  for (i = 0; i < x.length; i++) {
    newValues.push({id: x[i].id, val: x[i].value});
  }
  
  //create array of changed values
  changedValues = [];
  for (a in formerValues){
    for (b in newValues){
      if (formerValues[a].id == newValues[b].id && formerValues[a].val != newValues[b].val){
        changedValues.push({id: formerValues[a].id , oldVal: formerValues[a].val , newVal: newValues[b].val});
      };
    };
  };
  
  // create a message with all changed values
  message = '';
  for (c in changedValues){
    message = message + ' - The input field "' + changedValues[c].id + '" was changed from ' + changedValues[c].oldVal + ' to ' + changedValues[c].newVal + '\n';
  }
  
  // pop up with message
  if (changedValues.length <= 0) { 
    document.getElementById("demo").innerHTML = ">> No change was made"
  }
  else {
    var x;
    if (confirm("Are you sure to validate those changes?\n\n" + message ) == true) {
      x = ">> Changes confirmed.";
      //insert php action etc here
    } 
    else {
      x = ">> Changes canceled.";
      //location.reload(true); //for demo only
    }
    document.getElementById("demo").innerHTML = x;
  }
}
