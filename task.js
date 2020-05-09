"use strict";
$(document).ready(function() {
    var index = 0;

    // the object all data from the rows will be stored in
    function Node(start,end) {
        this.start = start;
        this.end = end;
    }


    $("#addbutton").click(function(event) { // add a new row of text input when the add row button is pushed
        var table = $("#item-table");
        table = document.getElementById("item-table");
        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var t1 = document.createElement("input");
        t1.id = "start" + index;
        cell1.appendChild(t1);
        var cell2 = row.insertCell(1);
        var t2 = document.createElement("input");
        t2.id = "end" + index;
        cell2.appendChild(t2);
        index++;
    });
    
    var arr = [];
    $("#gobutton").click(function() { //  compute the fractional knapsack
        var table = document.getElementById("item-table");
        //  get the data from each row and store it in a node
        for (var row, i = 0; row = table.rows[i]; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            var name = $('#start' + i);
            // name = document.getElementById("Name"+i);
            var profit = $('#end' + i);
            var node = new Node(start.val(), end.val());
        }
        console.log(arr);
        //  sort the array using the custom built quicksort function below
        arr.sort(compare) ;

        function compare(a,b){
            return (a.endtime>b.endtime ? 1 : -1);
        }
        console.log(arr);
        let total_activities= 1;
        var ans= [];
    
        function getSolution(){
    
            let k=0;
            ans.push(arr[0]);
            
            for(let i=1; i<arr.length; i++){
    
                let endtime= dataArray[k].endtime;
    
                if( dataArray[i].starttime >= endtime){
                    k=i;
                    ans.push(dataArray[i]);
                    total_activities++;
                }
    
            }
    
        }

      
}
 
});