
var dateField = $(".date");

var expField = $(".exp");

var amountField = $(".money");

var addList = [];

var userInput = {
    date:$(".date").val(),
    expenses: $(".exp").val(),
    amount:$(".money").val()


};

//function

function renderList() {
  let saved = JSON.parse(localStorage.getItem("expenses")) || [];
  $(".addList").empty();
  saved.forEach((exp, i) => {
    $(".addList").prepend(
      `<li>
         ${exp.date} - ${exp.expenses} - ksh ${exp.amount}
         <button class="delete-btn btn btn-sm btn-danger" data-index="${i}">Delete</button>
       </li>`
    );
  });
}










$(".save").click(function () {
var addList = [];

var userInput = {
    date:$(".date").val(),
    expenses: $(".exp").val(),
    amount:$(".money").val()


};



 if(userInput.date.trim() !== "" && userInput.expenses.trim() !== "" && userInput.amount.trim() !== "" ){ 
    
    let addList = JSON.parse(localStorage.getItem("expenses")) || [];

    
    addList.push(userInput);
    console.log(userInput + "task saved");

    localStorage.setItem("expenses", JSON.stringify(addList));

    
    //$(".addList").append(
    // `<li>${userInput.date} - ${userInput.expenses} - ksh ${userInput.amount}</li>`
   // );
      renderList();


    $(".date").val("");
    $(".exp").val("");
    $(".money").val("");
 //add here
  } else {
    alert("please fillin all fields");
  }
   
});

//handler delete clicks

$(".addList").on("click", ".delete-btn", function () {
  let index = $(this).data("index");
  let addList = JSON.parse(localStorage.getItem("expenses")) || [];

  addList.splice(index, 1); // remove one item
  localStorage.setItem("expenses", JSON.stringify(addList));

  renderList(); // refresh list
});






/*$(document).ready(function() {
  let saved = JSON.parse(localStorage.getItem("expenses")) || [];
  saved.forEach((exp) => {
    $(".addList").append(`<li>${exp.date} - ${exp.expenses} - ksh ${exp.amount}</li>`);
  });
});
*/


$(document).ready(function() {
  renderList();
});



    
