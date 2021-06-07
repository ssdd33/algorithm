/*
올바른 괄호라면 모든 괄호는 결국 한쌍을 이루고 있다.
1.문자열을 기록할 stack =[]을 만든다
2.문자열을 순회한다.
2.1.현재 순서의 문자가 "("라면 stack에 push
2.2.현재 순서의 문자가 ")"이고, stack의 마지막 요소가 "(" 라면 stack의 마지막 요소 pop()
2.2.1.")"이고, stack의 마지막 요소가 "("가 아니라면 return false;
3.문자열을 모두 순회하고 반복문을 마쳤을때 stack의 길이가 0이라면 return true;
3.1.아니라면 return false;

배열의 끝(top)에서 요소들이 삽입/삭제되고 있다.는 점으로 충분히 이 알고리즘이 스택에 관한 알고리즘이라고 말할 수 있는가? 
*/
exports.module = function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
