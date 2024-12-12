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

    
    // let arr1=[4,32,61,1,2,9]
    // let ans= arr1.sort()
    // document.write(ans)         // assending order only first digit
    // document.write(arr1)        //change the original array

    // let ans1= arr1.reverse()     //reverse order only first digit
    // document.write(ans1)

    // let ans1= arr1.sort().reverse()    // dessending order by first digit only
    // document.write(ans1)
    // let ans= arr1.sort((a,b)=>a-b)      //assending order perfectly
    // document.write(ans)    
    // let arr2= [5,7,8]
    // let ans= arr1.concat(arr2)
    // ans.sort()
    // document.write(ans)

}
// okk();

function start(){
    // let show = document.querySelector("#text")
    // let show = document.getElementById("text")
    // show.textContent="It's Coming"
    // show.innerHTML= "<h1> Its Come </h1>"
    // show.style.color="red";


    let a= [2,5,9,7,3,1, 81, 6]
    // let ans = a.slice(2,6)
    // let ans = a.slice(0,-1)    // give all except last element
    // document.write(ans)

    // a.splice(2,3,20,17,18);            // 3 parameters : from where to add, how many to delete, what to add 
    

    // map =========================================
    // let ans= a.map(function(num) {
    //     return num*2
    // })
    // document.write(ans)


    // const go=()=>{      // arrow function is the short way to write a function 

// }
    // let ans=a.map((num)=>num*3)
    // document.write(ans)
    // let ans=a.filter((num)=>num%2!==0)
    // document.write(ans)

    // a.forEach((num)=>{          // string return
    //     document.write(num*2+" ");
    // })



    for(let num of a) {         // string return
        document.write(num + "  ")
    }
    
}


