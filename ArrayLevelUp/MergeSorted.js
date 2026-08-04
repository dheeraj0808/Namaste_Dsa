// write a program to merge sorted array

//first way 
var merge = function (num1 , m , num2, n ){
let num1Copy = num1.slice(0,m);
let p1=0;
let p2=0;
for(let i=0;i<m+n;i++){
    if(p2>=n || p1<=m && num1Copy[p1] <num2[p2]){
        num1[i]=num1Copy[p1];
        p1++;
    }
    else{
        num1[i]=num2[p2];
        p2++;
    }
}
}


// to reduce the space complexity , in the previous aproach due to slic we are using extra space 
// so to reduce them we need to go for another aproach 

var merge2 = function (num1,m , num2,n){
    let p1=m-1;
    let p2=n-1;
    for(let i=m+n-1;i>=0;i--){
        if(p2<0){
            break;
        }
        if(p1>=0 && num1[p1]>num2[p2]){
            num1[i]=num1[p1];
            p1--;
        }
        else{
            num1[i]=num2[p2];
            p2--;
        }

    }

}