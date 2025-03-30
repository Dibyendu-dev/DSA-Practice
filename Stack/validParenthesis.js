function isValidP(str) 
{
  const stack = [];

  for (let i = 0; i < str.length; i++) 
    {
        let char = str[i];
     if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
     } else if (char === ")" || char === "}" || char === "]") {
      if (isEmpty(stack)) {
        return false;
      }
      let top = stack.pop();
      if (
        (char === ")" && top != "(") ||
        (char === "}" && top != "{") ||
        (char === "]" && top != "[")
      ) {
        return false;
      }
    }
}
  return true;
}

function isEmpty(stack) {
  return stack.length === 0;
}

const string1 = "([]{}[])";
console.log(isValidP(string1));
