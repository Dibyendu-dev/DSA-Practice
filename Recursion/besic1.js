
   function  printNos(n) {
       let result = [];
       function helper (current){
        if(current > n) return
        result.push(current);
        helper(current+1)
       }
       helper(1);
       console.log(result+ ' ')
    }

printNos(64);