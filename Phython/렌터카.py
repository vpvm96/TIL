# 지시사항 1~3번을 참고하여 코드를 작성하세요.
H = int(input()) # 이용할 시간
A = int(input()) # 시간당 비용
B, C, D = map(int, input().split()) # 기본요금, 기본시간, 시간당 부과 요금

# 지시사항 4번을 참고하여 코드를 작성하세요.
rental_carA = H * A 
rental_carB = (H - C) * D + B 

result = min(rental_carA, rental_carB)



# 아래 코드는 결과를 확인하기 위한 코드입니다.
print(result)