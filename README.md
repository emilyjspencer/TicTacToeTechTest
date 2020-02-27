# Tic-Tac-Toe Tech Test

## Test Description

This is a tech test taken during Week 10 of the Makers Academy course. 

Click [here](#brief) for the brief.
The link to the user stories (created by me and based on the specification) can be found [here](#user-stories)

## Technologies & Design Principles


## User Stories
#user-stories
```
As player X,
Since the random number generator selected me
I want to be able to select a square first

As player X,
Since I was selected to make the first move
I want to see a message that tells me that I get to start first

As a player,
So that I can play Tic-Tac-Toe
I want to be able to have a turn

As a player,
So that I can select a square
I want to be able to switch turns

As a player,
So that I know whose turn it is
I want to see a message that tells me whose turn it is

As a player,
If I try to select a square that my opponent has already selected
I want to see a message that tells me the square is occupied

As a player,
So that I can win,
I want to be able to select 3 squares which make a winning combination

As the winning player,
So I know for certain that I have won,
I want to see a message that tells me I have won



```

## Project setup

Clone my code by typing the following into the command line.<br>

```
$ git clone https://github.com/emilyjspencer/TicTacToeTechTest.git

```

## How to use

```

```

## Testing

```
Run the tests by opening the SpecRunner.html file

```

## Brief

The rules of tic-tac-toe are as follows:

There are two players in the game (X and O)
Players take turns until the game is over
A player can claim a field if it is not already taken
A turn ends when a player claims a field
A player wins if they claim all the fields in a row, column or diagonal
A game is over if a player wins
A game is over when all fields are taken
Build the business logic for a game of tic tac toe. 
It should be easy to implement a working game of tic tac toe by 
combining your code with any user interface, whether web or command line.



**Plan**


* The board is composed of nine squares
* Each square can be claimed by a player
* Player 1 goes first and is distinguished by an 'X'
* Player 2 goes second and is distinguished by an 'O'
* The squares are labelled as follows(from left to right):

* A1 A2 A3
* B1 B2 B3
* C1 C2 C3

* There are eight possible winning combinations for each player:
* For player 1:

* Horizontally: 
- A1 A2 A3
- B1 B2 B3
- C1 C2 C3

- Vertically:
- A1 B1 C1
- A2  B2 C2
- A3 B2 C3

- Diagonally:
- A1 B2 C3
- C1 B2 A3


**Mapping**

* A1 =  squares[0][0]
* B1 = squares[0][1]
* C1 = squares[0][2]
* A2 = squares[1][0]
* B2 = squares[1][1]
* C2 = squares[1][2]
* A3 = squares[2][0]
* B3 = squares[2][1]
* C3 = squares[2][2]

Winning Combinations:


winningCombinations =[
 [A1, A2, A3], [B1, B2, B3], [C1, C2, C3],
 [A1, B1, C1], [A2, B2, C2], [A3, B3, C3],
 [A1, B2, C3] [C1, B2, A3]
];