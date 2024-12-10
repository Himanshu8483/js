// document Object model 

// string 
function okk(){
    // alert("Hello World")
    let text="This is an string";
    let text2="this is an string";
    let text3 = "   okk";
    let text4 = "the java mern Java  and javascript is fun";
    // alert(text)
    // alert(text.length)
    // document.write(text.length)     //to print on body
    // document.write(text.charAt(2))      // to pass the indec number
    // document.write(text.slice(2))
    // document.write(text.slice(2,10))
    // document.write(text.concat(" "+text2))
    // document.write(text3.trim())
    // document.write(text.substring(0, 3))
    // document.write(text.toUpperCase())
    // document.write(text.charAt(3))
    // document.write(text.charCodeAt())
    // document.write(text.indexOf("s"))
    // document.write(text4.replace("java", "Function")) 
    // document.write(text4.replace(/java/i, "Function")) // i case in -sensitive change
    // document.write(text4.replace(/java/g, "Function")) // g global change
    // document.write(text4.replace(/java/ig, "Function"))
    // document.write(text4.replaceAll("java", "Function"))

    // let text5 = "Apple Mango Banana Orange" ; // in array form
    // let ans= text5.split(" ")
    // console.log(ans)

    //Template letrals (`` at before 1 button) which supports single qoutes('') and double qoutes ("")
//     let str = `this "cybrom"  lorem
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error, aliquam asperiores velit beatae modi consequatur qui corrupti ex quas sed excepturi quae nostrum suscipit praesentium deserunt cumque doloribus facere!

//     'office' string`;
//     alert(str);

    // let str = "end line <br> end start";
    // document.write("<h1>" + str + "</h1>");
    
    let ans1=parseInt(prompt("enter no. 1"))
    let ans2=parseInt(prompt("enter no. 2"))
    // alert("the sum of" + ans1 + "and" + ans2 + "is" + (ans1+ans2))
    alert (`The sum of ${ans1} and ${ans2} is ${ans1+ans2}`)
    alert (`The multiply of ${ans1} and ${ans2} is ${ans1*ans2}`)

    
}
// okk();