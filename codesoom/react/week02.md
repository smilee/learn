# Week 2

## Think like an engineer (conceptual vs. *contextual*, semantic vs. *syntactic*, holistic vs. *analytic*)
> The solution development of industrial design sessions generally resembled a schema-driven refinement process, and that of mechanical engineering sessions tended to follow a case-driven adaptation process. [(Jiang & Yen, 2013, p. 38)](https://www.researchgate.net/publication/299820103_Design_Thinking_in_Conceptual_Design_Processes_A_Comparison_Between_Industrial_and_Engineering_Design_Students)
* Trained as a designer, I initially named my components to reflect what they do conceptually.
* However, with code reviews, I soon realized that contextual names are preferred.
* While conceptual thinking should not be discouraged, code tends to work on a lower level. Be as precise as possible.
* I will learn to think like an engineer while I code.

## Write test code
> It will save you hours of debugging/maintenance/regression testing time [4 Reasons You Should Write Tests First](https://dev.to/flippedcoding/4-reasons-you-should-write-tests-first-47oa)
* My code needed changes, so I made them. Then, I needed to check whether everything was still working.
* Onto the tedious, I thought. Then the tests came to the rescue.
* Test code improves maintainability by reducing the effort and time taken to make sure there are no unintended consequences.
* I will write test code from now on.

## Separate concerns
> The separation of concerns principle states that a given problem involves different kinds of concerns, which should be identified and separated to cope with complexity, and to achieve the required engineering quality factors such as robustness, adaptability and reusability. [(Aksit et al., 2001, p.1)](https://www.researchgate.net/publication/216884785_The_Six_concerns_for_Separation_of_Concerns)
* I started by writing code that met the requirements.
* My reviewer pointed out that one function had both events and states. I saw how that would make the code more complicated and implemented the required changes to separate concerns.
* Separation of concerns improves maintainability by detangling interdependencies of different aspects of the code.
* I will separate concerns as much as possible.
