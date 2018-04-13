//--------------------------------------Array----------------------------------------------
//-------------------------------------JavaScript------------------------------------------
//#########################################################################################

//length of array 

// a =[1,2,3,4,5,6,7];
// console.log(a.length)

//#########################################################################################

//Adding and Deleting Array

// a=[];
// a[0]="zero";
// a[1]="one";
// console.log(a)
// a.push("two");//Pushing or Adding  an Element
// console.log(a)

// a=[1,2,3,4]
// delete a[2]; //Deleating an Element
// console.log(a);

//#########################################################################################

//Iterating array

//  var kyes = object.kyes(0);
//  var values=[]
//  for(var i=0 ;i<kyes.length;i++)
//  {
//      var key =kyes[i];
//      values[i] =o[key];
//  }


// Array methods
//#########################################################################################

//1.join()
//The a.join() method converts all the elements of an arrry to string and 
//concats them,returning the resulting String 
// var a =[1,2,3,4,5];
// console.log(a.join(" "))
// console.log(a.join(""))
// console.log(a.join())

//#########################################################################################

//2.reverse()
//the a.reverse() method reverse the order of teh element of an array and returns reversed array 

// var a =[1,2,3,4,5,6,7];
// console.log(a.reverse());

//#########################################################################################


// 3.sort()
// a.sort() sorts the Elements of array in place and returns the sorted value 

//Alphabetic Order

// var a = ["mamun",'jahid','abir'];
// a.sort();
// console.log(a);

//Numarical Order

// var a = [12,1,56,5]
// a.sort();
// console.log(a);//here out put is not currect becouse numaric value is  not possible in this way please try this way 

// var a =  [12,1,56,5];
// a.sort(function(a,b)
// {
//     return a-b;
// });
// console.log(a) ///wow this is correct out put .....

// a.sort(function(a,b)
// {
//     return b-a
// })
// console.log(a); // this is reverse out put in this array



// sorting array shows uppercase and lowercase 

// var a =['jahid','suchi','mamun']
// a.sort();
// a.sort(function(s,t){
// var a = s.toLowerCase();
// var q=t.toUpperCase();
// console.log(q);
// console.log(a);

// });

//#########################################################################################

// 4.concat()
//The a.concat() method creats and returns a new array that contains teh elements of the original array on which concat was invokeed,fllowed by each argumetns to concat()

// var a =[1,2,3]
// console.log(a.concat(6,8));
// console.log(a.concat([4,5]))
// console.log(a.concat(4,[5,[6,7]]))

//#########################################################################################

//5.slice
//the a.slice() method returns a slice or subarry of the specified array 
// var a =[1,2,3,4,5];
// console.log(a.slice(0,3));
// console.log(a.slice(3))
// console.log(a.slice(1,-1))
// console.log(a.slice(-3,-2))


// 6.Splice()
// the array.splice method is a general-perpose method for inserting or removeing elements for array 

// var a = [1,2,3,4,5,6,7,8]
// console.log(a.splice(4));
// console.log(a.splice(1,2))

//#########################################################################################

//7.push and pop
//The push() and pop()  methods allowe you to work with arrays as if they were stacks.
//something is push in srackes and pop, something is remove in stacks 

// var stacks =[];
// stacks.push(1,2,3)
// stacks.push(4)
// console.log(stacks);
// stacks.pop();
// console.log(stacks)
// stacks.push(4,5)

// console.log(stacks)
// stacks.pop();
// console.log(stacks)
// stacks.pop();
// console.log(stacks)
// stacks.pop()
// stacks.pop()
// stacks.pop()
// console.log(stacks)

// #########################################################################################

// 8.toString() and toLocalString()


// var a =[1,2,3,4,5]
// var b= ["jahid",'abir','mamun',12];
// console.log(a.toString());
// console.log(b.toLocaleString())


//-------------------------ECMASCRIPT 5 Array Methods--------------------------------------
//Discuss some Methods in Ecmascript 


//######################################################################################

// 1.foreach() 
// var data =[1,2,3,4];
// var sum =0;
// data.forEach(function(value)
// {
//     sum +=value;
// });
// console.log(sum);

// data.forEach(function(v,i,a){
//     a[i] =v+1;

// })

// console.log(data)

//#############################################################################################





















