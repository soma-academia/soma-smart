---
id: ai-learn
track: ai
code: A3
name: How Machines Learn
part: Models, decision trees and testing
cbe: nice
strand:
video:
video_title:
video_channel:
explainer: decision-tree
---

# A3 · How Machines Learn

## Read

### 🧠 What a model is

When AI learns, it builds a model: a set of rules or numbers that turns inputs (features) into a prediction. A model for crop prices might take the season and the rainfall, and predict the price of maize next month. The model is the part that is "trained".

### 🌳 Decision trees

A decision tree is one simple kind of model. It asks yes/no questions, one after another, until it reaches an answer: "Does it have feathers? Yes → bird. No → Does it breathe with gills? Yes → fish. No → mammal." Training means finding which questions to ask, and in what order.

### 🔁 Training is trial and improvement

Most models start bad and improve. They make predictions on the training data, measure how wrong they are, adjust a little, and repeat, often thousands or millions of times. Neural networks, the models behind modern speech and image AI, learn this way by adjusting millions of numbers.

### 📈 Accuracy and testing

Accuracy is the share of predictions that are correct. A model that is right 90 times out of 100 has 90% accuracy. It must be measured on test data the model has never seen. A model can score 100% on its training data and still fail on new examples.

### 🎯 Overfitting

Overfitting is when a model memorises its training examples instead of learning the general pattern, like a learner who memorises past-paper answers but can't solve a new question. In the explainer above, a tree can sort every training animal perfectly and still get a dolphin wrong.

## Listen

- A trained model turns inputs into a prediction.
- A decision tree asks yes or no questions until it reaches an answer.
- Training is trial and improvement, repeated many times.
- Neural networks learn by adjusting millions of numbers.
- Accuracy is the share of predictions that are correct.
- Always measure accuracy on test data the model hasn't seen.
- Overfitting is memorising the examples instead of the pattern.

## Mission: Train and test your tree

- In the explainer, build a tree that sorts all the training animals, then test it on the new ones. Note how many it gets right.
- Start again and build a different tree. Which questions worked best on the new animals, and why?

Question: Your best tree's questions, and how many new animals it got right.

### Task: order
Label: Put the steps of building a model in order.
1. Collect and label example data
   > For example, animals marked mammal, bird or fish.
2. Split it into training data and test data
   > Keep some examples hidden from training.
3. Train the model on the training data
   > It adjusts its rules to fit the examples.
4. Measure accuracy on the test data
   > Check it on examples it has never seen.
5. Improve and repeat, or put the model to use
   > Better data or features often matter more than anything else.

### Task: pick

#### A model gets 45 out of 50 test examples right. What is its accuracy?
- [ ] 45%
- [ ] 50%
- [x] 90%
- [ ] 95%
Why: 45 ÷ 50 = 0.9, which is 90%.

#### A model scores 100% on training data but 60% on test data. What is the most likely problem?
- [ ] The test data is too easy
- [x] Overfitting: it memorised the training examples
- [ ] The model is perfect
- [ ] The computer is too slow
Why: A big gap between training and test results is the classic sign of overfitting.

## Quiz

### What is a model in machine learning?
- [x] Rules or numbers that turn inputs into a prediction
- [ ] The example data that a system is trained on
- [ ] The computer hardware that runs the AI program
- [ ] A score of correct answers
Why: Training adjusts the model's rules or numbers so that its predictions match the examples better.

### How does a decision tree make a decision?
- [ ] It picks an answer at random and hopes it's right
- [x] It asks yes/no questions until it reaches an answer
- [ ] It looks the answer up in a stored dictionary of words
- [ ] It asks the user
Why: Each question splits the examples into smaller groups until each group points to one answer.

### What does accuracy measure?
- [ ] How quickly the model makes each prediction
- [x] The share of predictions that are correct
- [ ] How many examples were used in training
- [ ] The model's size
Why: Accuracy is correct predictions divided by all predictions, so 90% means 9 out of every 10 are right.

### Why must accuracy be measured on test data?
- [ ] Because test data is always larger than training data
- [x] To see if it works on examples it has never seen
- [ ] Because training data must be kept secret
- [ ] It's faster
Why: Scoring well on familiar examples only proves memory; new examples show whether the pattern was really learned.

### What is overfitting?
- [ ] When a model is too simple to learn any pattern at all
- [x] Memorising training examples instead of the pattern
- [ ] When a computer overheats from training for too long
- [ ] Using too little memory
Why: An overfitted model looks perfect on its training data but fails on new data it hasn't seen.

### How do most models improve during training?
- [ ] They start out perfect and never need to change
- [x] They predict, measure errors, adjust, and repeat
- [ ] A programmer rewrites every rule by hand after each test
- [ ] They wait for updates
Why: Each round of small corrections reduces the errors a little, until the model fits the data well.

### Neural networks learn by...
- [ ] Growing real brain cells inside the computer chip
- [x] Adjusting millions of numbers to reduce their errors
- [ ] Reading the internet once and memorising every page
- [ ] Asking engineers for answers
Why: Neural networks are inspired by the brain, but they are maths on computers that tune numbers to cut errors.

### In the explainer, why did the dolphin trip up some trees?
- [ ] Dolphins are fish, so the trees were correct
- [x] It's a mammal with almost no hair, unlike the training ones
- [ ] There were too many dolphins in the training data
- [ ] The computer ran out of memory
Why: The training data had no water-living mammals, so a tree relying on "fur" fails on dolphins.

### A model's accuracy on test data is low. What often helps most?
- [ ] Training on the test data until the score goes up
- [x] More varied, better-labelled data, or better features
- [ ] Running the same model again on a faster, bigger computer
- [ ] A bigger screen
Why: Better examples or features help the model learn the real pattern; training on test data would only hide the problem.

### What is the first step in building a model?
- [x] Collecting and labelling example data
- [ ] Measuring the model's accuracy on test data
- [ ] Releasing the app for people to use
- [ ] Selling the app
Why: Without good example data there is nothing for the model to learn from, so data always comes first.
