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
- [ ] A person who poses for photos
- [ ] A type of computer case
- [ ] A spreadsheet only
Why: Training adjusts the model so its predictions match the examples.

### How does a decision tree make a decision?
- [ ] It guesses randomly
- [x] It asks a series of yes/no questions until it reaches an answer
- [ ] It asks the user to decide
- [ ] It looks up a dictionary
Why: Each question splits the examples into smaller groups until each group has one answer.

### What does accuracy measure?
- [ ] How fast a model runs
- [x] The share of predictions that are correct
- [ ] How big the model is
- [ ] How many features it uses
Why: 90% accuracy means 9 out of every 10 predictions are right.

### Why must accuracy be measured on test data?
- [ ] Test data is always larger
- [x] To see if the model works on examples it has never seen
- [ ] Training data is secret
- [ ] It's faster
Why: Scoring well only on familiar examples doesn't prove the model learned the pattern.

### What is overfitting?
- [ ] A model that is too small
- [x] Memorising the training examples instead of learning the general pattern
- [ ] A computer that overheats
- [ ] Using too little data
Why: An overfitted model looks perfect in training but fails on new data.

### How do most models improve during training?
- [ ] They are perfect from the start
- [x] They predict, measure their errors, adjust slightly, and repeat many times
- [ ] A programmer edits every rule by hand
- [ ] They wait for updates
Why: Many small corrections add up to a model that fits the data.

### Neural networks learn by...
- [ ] Growing real brain cells
- [x] Adjusting millions of numbers to reduce their errors
- [ ] Reading the internet once
- [ ] Copying other networks
Why: They're inspired by the brain, but they are maths running on computers.

### In the explainer, why did the dolphin trip up some trees?
- [ ] Dolphins are fish
- [x] It lives in water and has almost no hair, unlike the mammals in the training data
- [ ] The tree was too short
- [ ] The computer was broken
Why: The training data had no water-living mammals, so a tree relying on "fur" fails on dolphins.

### A model's accuracy on test data is low. What often helps most?
- [ ] Buying a bigger screen
- [x] More varied, better-labelled data, or better features
- [ ] Training on the test data
- [ ] Deleting the test data
Why: Better examples usually beat more training time. Training on the test data would just hide the problem.

### What is the first step in building a model?
- [x] Collecting and labelling example data
- [ ] Measuring accuracy
- [ ] Selling the app
- [ ] Testing on new data
Why: Without good data there is nothing for the model to learn from.
