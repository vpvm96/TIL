# 지시사항을 참고하여 코드를 작성하세요.
find = []
count = 0

for i in range(1, 10000):
    find.append(i)

count = str(find).count('8')

print(count)