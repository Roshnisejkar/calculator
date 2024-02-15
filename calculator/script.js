// const input=document.getElementById("inputbox");
// const button=document.querySelectorAll("button");

// string="";//we store our result
// const array=Array.from(buttons);//we run the loop of array and we amke the array of buttons
// array.forEach(button =>{
//     button.addEventListener("click",(e)=>{   //when we click button so store value in string
//         if(e.target.innerHTML=="="){
//             string=eval(string);
//             input.value=string;
//         }

//         else if(e.target.innerHTML=="AC"){
//             string="";
//             input.value=string;//ivalute value show in input
    
//         }

//         else if(e.target.innerHTML=="DEL"){
//             string=strings.substring(0,string.length-1);
//             input.value=string;}

//         else{
//             string+=e.target.innerHTML;//add the buttons in string
//             input.value=string;
//         }
        


        const inputBox = document.getElementById('inputbox');
        const buttons = document.querySelectorAll('button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;
                if (value === '=') {
                    inputBox.value = eval(inputBox.value);
                } else if (value === 'AC') {
                    inputBox.value = '';
                } else if (value === 'DEL') {
                    inputBox.value = inputBox.value.slice(0, -1);
                } else {
                    inputBox.value += value;
                }
            });
        });
  
