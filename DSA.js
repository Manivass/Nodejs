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

/*function sum(a){
    if(a==0){
        return 0 ;
    }
    return a + sum(a-1);
}
let sum1 = sum(5);
console.log(sum1);
*/

// Two Merge Sorted List
/*
let num1 = [1,2,4];
let num2 = [4,5,6];
let m = num1.length ;
let n = num2.length ;
let p1 = m - 1 ;
let p2 = n  - 1 ;
let num1Copy = num1.slice(0,m);
for(let i = m+n-1 ; i>=0 ; i-- ){
    if((num1Copy[p1] >= num2[p2] && p2>=0 ) || p2<0){
        num1[i] = num1Copy[p1];
        p1 = p1 - 1 ;
    }
    else 
    {
        num1[i] = num2[p2];
        p2 = p2 - 1 ;
    }
}

console.log(num1);
*/

// Sum Of Digits
/*
let num  = 1234 ;
let add = 0 ;
function sumofDigits(num){
    if(num===0){
        return 0 ;
    }
    let rem = num % 10 ;
    return rem +  sumofDigits(Math.floor(num/10),add);
}
let sum = sumofDigits(num , add );
console.log(sum);
*/
// Power Funtion
/*
let num = 5 ;
let add = 0 ;
function powOf2(n){
    if(n===0){
        return 1 ; 
    }
    return 2 * powOf2(n-1);
}

let powOf = powOf2(num);
console.log(powOf);
*/

// Reverse a String

/*
 let name = "madam";
let len = name.length;
function reverseName(len) {
  if (len < 0) {
    return "";
  }
  return name[len] + reverseName(len - 1);
}
let reverse3 = reverseName(len - 1 );
console.log(reverse3===name);
*/

// Palindrome Checking

/*
let str = "AbbA";
function funcPalindrome(str,r,l){
    if(r>=l) return true ;
    if(str[r]!==str[l]) return false ;
    return funcPalindrome(str , r + 1 , l - 1 );
}
let palindrome = funcPalindrome(str,0,str.length-1);
console.log(palindrome);
*/

// fibbonacci Series

/*
let num = 2 ; 
function funcFibonacci(n){
    if(n<=1){
        return n ;
    }
    return funcFibonacci(n-1) + funcFibonacci(n-2);
}
const fibo = funcFibonacci(num);
console.log(fibo);
*/

// Print 1 to N 
/*
let num = 6 ;
function funcConsec(n){
    if(n===0){
        return 0 ;
    }
    return n + 10*funcConsec(n-1);    
}
const printConsective = funcConsec(num);
console.log(printConsective);
*/

// Print N to 1 
/*
let num = 6 ;
function funcReverse(num){
    if(num===0) return 0 ;
    console.log(num*Math.pow(10,num-1));
    return num*Math.pow(10,num-1) + funcReverse(num-1);
    
}
const reverse = funcReverse(num);
console.log(reverse);
*/

// Sum of 1 to N
/*
let num = 5 ; 
function funcSum(n){
    if(n===0) return 0 ;
    return n + funcSum(n-1);
}
const sum = funcSum(num);
console.log(sum);
*/

// Count the Number 
/*
let num = 12345 ;
function funcCount(n,count){
    if(n===0) return count ;
    count++ ;
    return funcCount(Math.floor(n/10) , count);
}
const count  = funcCount(num , 0);
console.log(count);
*/

// print Even NUmbers 
/*
let num = 123456789 ;
function funcEven(n){
    if(n===0) return 0 ;
    let rem = n % 10 ;
    let even = rem%2===0;
    return even ? (rem + 10*funcEven(Math.floor(n/10))) : (0 + funcEven(Math.floor(n/10)))  
}
const even = funcEven(num);
console.log(even);
*/

// Palindrome Checking in Number
/*
let num = 1234 ;
function funcPalindrome(n){
    if(n===0) return 0 ;
    return n%10*Math.pow(10,Math.floor(Math.log10(n))) + funcPalindrome(Math.floor(n/10)); 
}
const palindromeCheck = funcPalindrome(num);
console.log(palindromeCheck===num);
*/


