function alfabetica() {
    var i1 = document.getElementById("input1").value
    var i2 = document.getElementById("input2").value
    var i3 = document.getElementById("input3").value
    var array = [i1, i2, i3]

    var alfabetik = array.sort()
    console.log(alfabetik)
}
