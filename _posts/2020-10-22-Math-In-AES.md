---
layout: post
title: "Math in AES"
author: "Seongwook Kim"
tags: AES, Encrypt, crypto
comments: true
use_math: true
---
# AES
Advanced Encryption Standard
> ref: [Galois Field lecture](https://www.youtube.com/watch?v=x1v2tX4_dkQ&t=3682s)

## Galois Field (a.k.a Finite Field)
F.F(Finite Field) is exist with $P^m$
> *p: prime number ($\mathbb{P}$)*\
*m: integer ($\mathbb{Z}$)*\
*GF: Galois feld*

 
### Prime Field Arithmetic
$GF(P) = \{ 0,1 ...,  P-1 \}$
- Add, Subtract, Multiply
	$$ let \, a,b \in GF(p) = \{ 0,1,...,p-1 \} \\
	a+b \equiv c   \mod p \\
	a-b \equiv d \mod p \\
	a\cdot b \equiv e \mod p
	$$
- Inversion\
	$$a \in GF(p)$$\
	the inversion $a \cdot a^{-1} \equiv  1$

### Extension Field
$GF(P^m)\quad {\scriptsize (m > 1)}$\
but AES use $m = 8$

- The elements of $GF(2^m)$ are polynomials\
 $a_i \in GF(2) = \{0, 1\} $\
 $a_0 +  a_1x + ... + a_{m-1}x^{m-1}$\
 $= A(x) \in GF(2^m)$

- Element Representation

**ADD**

$GF(2^3) = GF(8)$\
$A(x) = a_2x^2 + a_1x + a_0 = (a_2,a_1, a_0)$\
$GF(2^3)$\
$ = \{ 0, 1, x, x+1, x^2, x^2 + 1, x^2 + x, x^2 + x + 1 \}$\
Addition and Subtraction\
use regular polynomial
add or subtraction, where the coefficients are compute in GF(2)
	
$GF(2^3)$\
$A(x) = x^2 + x + 1$\
$B(x) = x^2 \qquad+ 1 $\
-------------------------------\
$ =  (1+1)x^2 + x + (1+1)$\
$ = x $

**Multiply**
![img](https://t1.daumcdn.net/cfile/tistory/137E4648507E13A031)
Intuition: Just do   regular polynomial multiplication.
$GF(2^3)$\
$P(x) = x^3 + x + 1$\
$A \cdot B = (x^2+x+1)(x^2 + 1)$\
$= x^4 + x^3 + x^2 + x^2 +x + 1 $\
$= x^4 + x^3 + (1+1)x^2 +x +1 $\
$\neq x^4 + x^3 + x + 1 = C'(x) $\
$\because x^4 + x^3 + x + 1  \notin GF(2^3)$\
solution : reduce $$C'(x)$$ modulo polynomial 
that "behaves like a prime" thes are called irreducible polynomial\
$( x^4 + x^3 + x + 1) \div (x^3+x+1) = x+1 $\
$\equiv  x^2 + x \equiv A \cdot B \mod P(x)$\
AES Irreducible polynomial 
$P(x) = x^8 + x^4 + x^3 + x +1$



