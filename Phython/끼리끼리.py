# 아래 코드는 문제 해결을 위해 기본적으로 제공되는 코드입니다. 수정하지 마세요!
card = []
red_pocket = []
blue_pocket = []
card_box = []

# 지시사항 1번을 참고하여 코드를 작성하세요.
num = input().split()
card = list(map(int, num)) # 정수형으로 변환한 카드 리스트

for i in card:
    if i >= 0:
        red_pocket.append(i)
    elif i < 0:
        blue_pocket.append(i)

card_box = [red_pocket, blue_pocket]

# 지시사항 2번을 참고하여 코드를 작성하세요.



# 지시사항 3번을 참고하여 코드를 작성하세요.



# 아래 코드는 결과를 확인하기 위한 코드입니다.
print(card_box)