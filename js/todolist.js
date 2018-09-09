document.addEventListener('DOMContentLoaded', function() {
        var inputUser = document.getElementById("todolist__input");
        var buttonAdd = document.getElementById("btn-add");
        var buttonClear = document.getElementById("btn-clear");
        var outputList = document.getElementById("todolist__output-list");
        var toDoList = document.querySelector('ol');
        var arrActivity = [];
        var i=0;
        var newActivity;

            buttonAdd.addEventListener('click', clickButtonAdd);
            buttonClear.addEventListener('click', clickButtonClear);
            toDoList.addEventListener('click',checkedList);

                function clickButtonAdd() {
                    if(inputUser.value == "") {
                        alert("Введите ваше дело!");
                    } else {
                        arrActivity.push(inputUser.value);
                        newActivity = document.createElement("li");
                        newActivity.appendChild(document.createTextNode(arrActivity[i]));
                        outputList.appendChild(newActivity);
                        inputUser.value="";
                        i++;
                        if((i!=0)&&(i%3==0)){
                            newActivity.style.color = getRandomColor();
                            newActivity.style.background = getRandomColor();
                        }
                    }
                }

                function clickButtonClear() {
                    arrActivity = [];
                    outputList.innerHTML = arrActivity;
                    inputUser.value="";
                    i=0;
                }

                function getRandomColor() {
                    var color = "#";
                    for (j = 0; j < 6; j++) {
                        color += Math.round(Math.random() * 16).toString(16)
                    }
                    return color;
                }

                function checkedList(event) {
                    if(event.target.tagName === "LI") {
                        event.target.classList.toggle('todolist-checked');
                    }
                }
});
