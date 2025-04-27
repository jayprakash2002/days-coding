a=int(input("enter the no"))
b=int(input("enter the no"))
small=0
if a<b:
    small=b
else:
    small=a
for x in range(small,0,-1):
     if a%x==0 and b%x==0:
         print("Hcf is =%d"%x)
         break    
