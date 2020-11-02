---
layout: post
title: "Python Decorator in C"
author: "Seongwook Kim"
tags: Language, C, Chill, C framework, C trick
comments: true
use_math: true
---

I implementating Webserver Framework in c with fastcgi
And I reference to [Flask](https://github.com/pallets/flask) structure.

I want to make my Framework programe easy and simple to use, So I thought what i should implement [Decorator](https://geeksforgeeks.org/decorators-in-python) in Python. Therefore I use gcc constructor attribute and C mecro Function to imitate Decorateor.

## Python decorator

~~~py
def decorator(func):
	def wrapper():
		print("before")
		func()
		print("after")
	return wrapper


@decorator
def say_byte():
	print("bye")
~~~

## Imitate Decorator in c

~~~c
#define CONCAT(x,y) x##y
#define GEN_FUNC_NAME CONCAT(x,y)
#define FUNC_NAME_BASE FUNC_BASE // You Shoud Modify it!!

#define DECORATOR(__fn_name) \
	extern void func();\
	void __attribute__((constructor)) GEN_FUNC_NAME(FUNC_NAME_BASE, __COUNTER__) () {\
		printf("before");\
		__fn_name();\
		printf("after");\
	}\
	void __fn_name()

DECORATOR(func) {
	printf("bye");
}
~~~

if you imitate the decorator in this way, you can just declare it and execute it before the main function
