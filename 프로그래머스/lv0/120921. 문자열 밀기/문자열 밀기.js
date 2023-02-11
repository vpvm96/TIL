function solution(A, B) {
   if (A == B) return 0
   for(let i=1; i<A.length+1; i++){
       const newStr = A[A.length-1] + A.substring(0, A.length-1);
       if(newStr == B) return i
       A = newStr;
   }
    return -1
}