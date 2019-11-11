document.getElementById("addNum").addEventListener("click", sum);
function sum() {
    var addInput1 = document.getElementById("addInput1").value;
    var addInput2 = document.getElementById("addInput2").value;
    var sum = +addInput1 + +addInput2;
    console.log(sum);
    document.getElementById("answer").innerHTML = sum;
}

document.getElementById("subNum").addEventListener("click", sub);
function sub() {
    var subInput1 = document.getElementById("subInput1").value;
    var subInput2 = document.getElementById("subInput2").value;
    var sub = +subInput1 - +subInput2;
    console.log(sub);
    document.getElementById("answer").innerHTML = sub;
}

document.getElementById("mulNum").addEventListener("click", mul);
function mul() {
    var mulInput1 = document.getElementById("mulInput1").value;
    var mulInput2 = document.getElementById("mulInput2").value;
    var mul = +mulInput1 * +mulInput2;
    console.log(mul);
    document.getElementById("answer").innerHTML = mul;
}