function checkAge (){
   const ageField = document.getElementById('age');
   const ageText = ageField.value;
   const errorTag = document.getElementById('error')  
   
   try{
    //console.log('Chittagong')
    //console.log(ageText);
    const age = parseInt(ageText);

    if(isNaN(age)){
        //console.log('age not found', age, ageText)
        throw"Please enter a number";
    }
    else if(age < 18 || age > 30){
        throw"Please enter a age from 18 to 30";
    }
    else{
        throw"You are passed in age check"
    }
    errorTag.innerText = '';
   }
   catch (error){
    console.log('ERROR:', error)
    errorTag.innerText = 'ERROR:' + ' ' + error;
   }
   finally{
    console.log('All done inside by try catch')
   }

   console.log(11111);
}