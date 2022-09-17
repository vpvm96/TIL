def CheckBracket(string): # string의 괄호의 짝을 체크하는 함수
    bracket_list = [ ] # 괄호 체크에 사용할 리스트   
    

    dic_brackets = { '{':'}',
                '[' : ']',
                '(' : ')'}
                
    # dic_brackets: 열린 괄호의 짝을 저장한 딕셔너리 
    # dic_brackets.values() : 닫힌 괄호들

    for char in string:
    # TODO: bracket_list를 활용하여 괄호의 짝이 맞는지 여부를 판단
    #       만약 짝이 맞지 않으면 False를 리턴 짝이 맞는다면 True를 리턴
        if char in dic_brackets.keys():
            bracket_list.append(char)
        elif char in dic_brackets.values():
            if len(bracket_list) == 0:
                return False
            else :
                top = bracket_list.pop()
                if char != dic_brackets[top]:
                    return False
    if len(bracket_list) == 0:
        return True
    return False


string = input()
print("정상" if CheckBracket(string) else "비정상")