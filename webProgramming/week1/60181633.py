FirstName=input(str("Input your first name: ")) 
LastName=input(str("Input your last name: ")) 
FullName = (LastName+' '+FirstName)
birthYear=input("Input your birth year (e.g., 2000): ") 
thisYear=input("Input this year (e.g.. 2020): ") 
gender=input("Input your gender (e.g., male or female): ") 
schoolId=input("Input your school-id(e.g.,20200015): ") 


print(f"My name is {FullName}.\nI am {(int(thisYear)-int(birthYear)+1)} year old {gender}.\nAnd I am a student of Data technology major in Myongi University! \nMy stduent id is {schoolId} and I am happy to join this major!")