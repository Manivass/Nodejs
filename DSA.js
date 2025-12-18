// let nums = [7,1,5,3,6];
// let minProduct = nums[0] ;
// let maxProfit = 0 ;
// for(let i = 0 ; i < nums.length ; i++ ){
//     if(nums[i]< minProduct){
//         minProduct = nums[i];
//     }
//     if(maxProfit < nums[i]-minProduct){
//         maxProfit = nums[i] - minProduct ;
//     }
// }
// console.log(maxProfit);


// Merge Sorted Array
/*let nums1 = [1,2,3,0,0,0];
let nums2 = [4,5,6];
let m = (nums1.length/2);
let n = nums2.length;
let nums1Copy = nums1.slice(0,3);
let p1 = 0 ;
let p2 = 0 ;
for(let i = 0 ; i < m+n ; i++ ){
    if(p2>=n || (p1<m && nums1Copy[p1]<nums2[p2])){
        nums1[i] = nums1Copy[p1];
        p1 = p1 + 1 ;
    }
    else {
        nums1[i] = nums2[p2];
        p2 = p2 + 1 ;
    }
}

console.log(nums1);
*/


// Approach - 2 

/*let nums1 = [1,2,3,0,0,0];
let nums2 = [4,5,6];
let nums1Copy = nums1.slice(0,3);
let m = nums1.length/2;
let n = nums2.length;
let p1 = m - 1 ;
let p2 = n - 1 ; 
for(let i = m+n-1 ; i>= 0 ; i-- ){
    if(p2<0 || (p1>=0 && nums1[p1]>nums2[p2])){
        nums1[i] = nums1[p1];
        p1 = p1 - 1 ;
    }
    else {
        nums1[i] = nums2[p2];
        p2 = p2 - 1 ;
    }
}

console.log(nums1);
*/

// Move Zeros 

/*et nums = [0,1,0,3,12];
let x = 0 ; 
for(let i = 0 ; i < nums.length ; i++ ){
    if(nums[i]!=0){
        nums[x] = nums[i];
        x = x + 1 ;
    }
}
for(let i = x ; i < nums.length ; i++ ){
    nums[i] = 0 ;
}
console.log(nums);
*/

// 136.Single Number

// Approach - 1 

/*let nums = [1,2,3,3,1];
let hash = {} ;
for(let i = 0 ; i < nums.length ; i++ ){
    if(!hash[nums[i]]){
        hash[nums[i]] = 1 ;
    }
    else {
        hash[nums[i]]++;
    }
}
for(let  i = 0 ; i < nums.length ; i++ ){
    if(hash[nums[i]]===1){
        console.log(nums[i]);
    }
}
*/

// Approach - 2 using Bitwise

// let nums = [1,2,3,2,1];
// let xor = 0 ;
// for(let i = 0 ; i<nums.length ; i++ ){
//     xor^=nums[i];
// }

// console.log(xor);

// recursive function

/*let num = 20 ;
function fun(a){
    if(a>num){
        return ;
    }
    console.log(a);
    fun(++a);
    
}
let a = 1 ;
fun(a);
*/

// Factorial

function sum(a){
    if(a==0){
        return 0 ;
    }
    return a + sum(a-1);
}
let sum1 = sum(5);
console.log(sum1);
