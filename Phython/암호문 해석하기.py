# 암호의 알파벳을 키로, 대응하는 원문의 알파벳을 값으로 저장한 딕셔너리입니다.

signal1 = {'a': 'n', 'b': 'd', 'c': 'a', 'd': 'b', 'e': 'e', 'f': 'l', 'g': 'j', 'h': 'o', 'i': 'z', 'j': 'u', 'k': 'y', 'l': 'v', 'm': 'w', 'n': 'q', 'o': 'x', 'p': 'r', 'q': 'p', 'r': 'f', 's': 'g', 't': 't', 'u': 'm', 'v': 'h', 'w': 'i', 'x': 'c', 'y': 'k', 'z': 's'}

signal2 = {'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q', 'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g', 'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b', 'z': 'a'}



# 지시사항을 참고하여 코드를 작성하세요.
def decode(code):
    text = ""
    myCode, myStr = code.split()
    for i in range(0, len(myCode)):
        if myCode[i] == '0':
            text += signal1[myStr[i]]
        else :
            text += signal2[myStr[i]]
        
    return text

code=input() # 암호문을 문자열의 형태로 입력받습니다.

text = decode(code)

print(text) # 해독된 문자열을 출력합니다.