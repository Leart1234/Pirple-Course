# import converters
# from converters import kg_to_lbs
# kg_to_lbs(100)
from utilies import find_max
numbers = [10, 3, 6, 2]
max = find_max(numbers)
print(max)

# print(converters.kg_to_lbs)

#Function with parameters
# def greet_user(first_name, last_name):
#     print(f'Hi {first_name} {last_name}!')
#     print('Welcome aboard')

# print("Start")
# greet_user("John", "Smith")
# print("Finish")    

#Return Statement
# def square(number):
#    return number * number

# print(square(3))   

# Creating a Reusable(Riperdorshem) Function  
# def emoji_converter(message):
#     words = message.split(" ")
#     emojis = {
#         ":)": ":😃",
#         ":(": ":😞"
#     }
#     output =

#     for word in words:
#         output += emojis.get(word,word) + " "
#         return output

# message = input(">")
# result = emoji_converter(message)
# print(result)

# Exceptions
# try:
#     age = int(input('Age: '))
#     income = 20000
#     risk = income / age
#     print(age)
# except ZeroDivisionError:
#     print('Age cannot be 0.')
# except ValueError:
#     print('Invalid value')

# Classes
# class Point:
#     def move(self):
#         print("move")
#     def draw(self):
#         print("draw")    

# point1 = Point()
# point1.x = 10
# point1.y = 20
# print(point1.x)
# point1.draw()

# point2 = Point()
# point2.x = 1
# print(point2.x)

#Constructors
# class Point:
#     def __init__(self, x, y): #method constructor
#         self.x = x
#         self.y = y

#     def move(self):
#         print("move")
#     def draw(self):
#         print("draw")

# point = Point(10, 20)
# print(point.x)
# class Person:
#     def __init__(self, name ):
#       self.name = name
        
#     def talk(self):
#         print(f"HI, I am {self.name}")

# john = Person("John smith")
# john.talk()

# bob = Person("Bob Smith")
# bob.talk()

# Inheritance
# class Dog(Mammal):
#     def bark(self):
#         print("bark")

# class Cat(Mammal):
#     def be_annoying(self):
#         print("annoying")

# dog1 = Dog()
# dog1.walk()

# cat = Cat()
# cat.walk()

# Modules
# def lbs_to_kg(weight):
#     return weight * 0.45

# def kg_to_lbs(weight):
#     return weight / 0.45

 