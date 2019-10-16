    // alert("Hello World ");
    console.log("Basic Log")
    console.error ("ERROR LOG")
    console.warn("Warning Log")
    // Declared x as a var.
    let x = 3
    let y = 5
    let z 

    z = x + y 
    console.log(z)
    z= x -y
    console.log(z)
    console.log(x*y)
    z = z*3
    console.log(z)

    z = Math.pow(x,y)
    console.log("z= x^y :::::: ", z)


    z = x +y 

    addTwoNum(x,y);
    viewHTMLElements();

    function addTwoNum(num1, num2 ){
        let z = num1 + num2
        console.log("ADD TWO NUM Function::::: ") 
        console.log(z)

    }

    function viewHTMLElements(){
        console.log(document.documentElement)
    }


    