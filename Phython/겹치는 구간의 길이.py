a = input().split(',')
b = input().split(',')
# 6, 10
aFirst = int(a[0]) - int(a[1]) // 2 # 6 - 10 / 2 = 1
aLast = int(a[1]) // 2 + int(a[0]) # 10 / 2 + 6 = 11

aArr = []
for i in range(aFirst, aLast + 1) :
    aArr.append(i)
    
bFirst = int(b[0]) - int(b[1]) // 2
bLast = int(b[1]) // 2 + int(b[0])

bArr = []
for i in range(bFirst, bLast + 1) :
    bArr.append(i)
# 지시사항을 보고 프로그램을 구현하세요
result = []
if aArr[0] <= bArr[0]:
    for b in bArr:
        if b in aArr:
            result.append(b)
else :
    for a in aArr:
        if a in bArr:
            result.append(a)
if len(result) == 0:
    print(0)
else :
    print(result[-1] - result[0])