//Patricia Figueroa


var numItems = prompt("How many names would you like to enter? ");
var numItems = parseInt(numItems);
for (i = 0; i < numItems; i++)
{
    document.getElementById("add").click();
}

var process = function()
{
    var storeValue = new Array();
    var table = [];
    var dom_names = document.getElementsByName('name');
    var dom_grades = document.getElementsByName('grade');

    grades = [];
    names = [];
    for (i = 0; i < dom_names.length && i < dom_grades.length; i++)
    {
        grades.push(dom_grades[i].value);
        names.push(dom_names[i].value);
        storeValue[dom_names[i].value] = dom_grades[i].value;
    }

    for(list in storeValue) {
        document.getElementById("showResult").innerHTML += list + " got a " + storeValue[list] + "<br>";
    }
    //document.getElementById("showResult").innerHTML = storeValue.join(" ");
    console.log(storeValue);

    grade_count = {A:0, B:0, C:0, D:0, F:0};
    total = 0;
    i = 0;
    while (i < names.length && i < grades.length)
    {
        total += parseFloat(grades[i]);
        grade = grades[i];
        ++i;

        if (grade >= 90)
            grade_count.A += 1;
        else if(grade >= 80)
            grade_count.B += 1;
        else if (grade >= 70)
            grade_count.C += 1;
        else if (grade >= 60)
            grade_count.D += 1;
        else
            grade_count.F += 1;
    }

    for (j = 0; j < names.length; ++j) {
        // document.write(names[j] + " got a " + grades[j] + "<br>");
    }
    average = total / j;
    average = average.toFixed(1);
    document.getElementById("showResult").innerHTML += "<h1>The class average was " + average + "</h1>";
    //document.write("<p>The class average was " + average);

    // loop to make the table
    //document.write('<table border="3">');
    grade_letter = ['A', 'B', 'C', 'D', 'F'];
    for (i = 0; i < 5; i++)
    {
        //document.write('<tr><td>' + grade_letter[i] + '</td><td>' + grade_count[grade_letter[i]] + '</td></tr>');
        table.push("<tr><td>" + grade_letter[i] + "</td><td>" + grade_count[grade_letter[i]] + "</td></tr>");
    }
    var html = "<table border='3'> " + table.join("") + "</table>";
    document.getElementById("showResult").innerHTML += "<div> " + html + "</div>";
    //var convert = String(html);
    // document.getElementById("showResult").innerHTML += convert;
}

function add() {

    //Create an input type dynamically.
    var name_element = document.createElement("input");
    var grade_element = document.createElement("input");

    //Create Labels
    var name_label = document.createElement("Label");
    name_label.innerHTML = "Name: ";
    var grade_label = document.createElement("Label");
    grade_label.innerHTML = "Grade: ";

    //Assign different attributes to the element.
    name_element.setAttribute("type", "text");
    // element.setAttribute("value", "");
    name_element.setAttribute("name", "name");
    name_element.setAttribute("style", "width:200px");

    grade_element.setAttribute("type", "text");
    // element.setAttribute("value", "");
    grade_element.setAttribute("name", "grade");
    grade_element.setAttribute("style", "width:200px");

    name_label.setAttribute("style", "font-weight:normal");
    grade_label.setAttribute("style", "font-weight:normal");

    // 'foobar' is the div id, where new fields are to be added
    var foo = document.getElementById("dataIn");

    //Append the element in page (in span).
    var br = document.createElement("br");
    foo.appendChild(br);
    foo.appendChild(name_label);
    foo.appendChild(name_element);
    foo.appendChild(document.createTextNode(" "));
    foo.appendChild(grade_label);
    foo.appendChild(grade_element);

    foo.appendChild(br);
}