function okk(){

    let fruits = ["Apple", "Mango" , "Banana", "Grapes"] ;

    // let ans=fruits.length;  // 4
    // document.write(ans);

    // pop() remove last element from array
    // fruits.pop();
    // fruits.pop();
    // fruits.pop();
    // document.write(fruits);
    
    // shift() remove starting element from array
//     fruits.shift();
//     fruits.shift();
//     fruits.shift();
//     document.write(fruits);
// }

    // push() add extra element at last from array
    // fruits.push("Papaya", "Pineapple" ,"Orange");
    // document.write(fruits);

    // unshift() add extra element at start from array
    // let ans= fruits.push("Papaya", "Pineapple" ,"Orange")
    // fruits.unshift("Papaya", "Pineapple" ,"Orange");
    // document.write(ans);
    // document.write(fruits);

    
    let arr1=[4,3,6,1,2,9]
    // let ans= arr1.sort()
    // document.write(ans)         // assending order
    // document.write(arr1)        //change the original array

    // let ans1= arr1.reverse()     //reverse order
    // document.write(ans1)

    // let ans1= arr1.sort().reverse()    // dessending order
    // document.write(ans1)

    let arr2= [5,7,8]
    let ans= arr1.concat(arr2)
    ans.sort()
    document.write(ans)

}
// okk();

function start(){
    // document.querySelector
    let show = document.getElementById("text")
    // show.textContent="It's Coming"
    show.innerHTML= "<h1> Its Come </h1>"
    // show.style.color="red";

}