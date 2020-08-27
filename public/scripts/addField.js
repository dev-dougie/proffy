//Catching the button
document.querySelector('#add-time')
.addEventListener('click', cloneField);



//


function cloneField(){

    //Duplicating page's field
     const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true);  
    
    //cleaning the fields
    const fields = newFieldsContainer.querySelectorAll('input');

    //For each field, clean...
    fields.forEach((field) => {
        field.value = '';
    })

    //Setting to the corret div
    document.querySelector('#schedule-items').appendChild(newFieldsContainer);

    document.querySelector('#remove-time');
    document.querySelector('#remove-time').addEventListener('click', removeField)

    function removeField(){
    
        if(newFieldsContainer === true){
            document.querySelector('#schedule-items').removeChild(newFieldsContainer)
        }
    }
} 




