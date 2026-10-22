---
id: ai-data
track: ai
code: A2
name: Data & Patterns
part: Training data, labels and features
cbe: nice
strand:
video:
video_title:
video_channel:
explainer:
---

# A2 · Data & Patterns

## Read

### 📊 Data is AI's food

AI learns from data: photos, sounds, text, numbers. The more good, relevant examples it sees, the better it usually gets. A system that recognises maize leaf disease needs many photos of healthy and diseased leaves, taken in different light, on different phones.

### 🏷️ Labels

In supervised learning, every example comes with the right answer, called a label: this photo is "healthy", that one is "maize streak virus". The AI tries to find what separates the labels. Labelling is often done by people, and mistakes in labels become mistakes in the AI.

### 🔍 Features

Features are the details the AI looks at to make a decision. To tell mangoes from avocados, useful features might be colour, shape and skin texture. Choosing good features (or letting the AI discover them) is a big part of building a model.

### 🧪 Training data and test data

You don't test a learner with the exact questions they practised. In the same way, data is split: training data teaches the model, and separate test data, which the model has never seen, checks whether it really learned the pattern or just memorised the examples.

### 🗑️ Garbage in, garbage out

If the data is poor, so is the AI. Too few examples, wrong labels, or examples that only show one kind of situation (only sunny photos, only one region's accent) produce a model that fails in the real world. Good data is varied, correctly labelled and fairly collected.

## Listen

- AI learns from data: photos, sounds, text and numbers.
- A label is the right answer attached to each example.
- Features are the details the AI uses to decide.
- Training data teaches the model; test data checks it.
- Test data must be examples the model has never seen.
- Garbage in, garbage out: poor data makes poor AI.

## Mission: Be the data collector

- Imagine building an AI that tells ripe from unripe bananas. List the features you would use and how you would label 20 example photos.
- Explain why your photos should come from different shops, times of day and phones.

Question: Your features, and one reason your data needs variety.

### Task: sort
Label: Is each one a feature or a label?
Buckets: Feature | Label
- The colour of a mango's skin → Feature
- "This email is spam" → Label
- The length of a message → Feature
- "This leaf has maize streak virus" → Label
- How round a fruit is → Feature
- "This voice recording says hello" → Label

### Task: pick

#### Why is some data kept back as test data?
- [ ] To save storage
- [x] To check the model on examples it has never seen
- [ ] Because it is less important
- [ ] To train twice as fast
Why: A model that only works on its training examples has memorised, not learned.

#### A crop-disease AI was trained only on photos taken in bright sunshine. What is likely to happen on cloudy days?
- [ ] It works even better
- [x] It may make more mistakes, because cloudy photos look different from its training data
- [ ] It stops needing data
- [ ] Nothing changes
Why: AI struggles with situations its training data didn't include.

## Quiz

### What does AI learn from?
- [x] Data, such as photos, text, sounds and numbers
- [ ] Rules its programmers type in for every case
- [ ] The electricity in its chips
- [ ] Its own feelings and life experiences
Why: Machine learning finds patterns in data; without examples like photos, text or numbers, there is nothing to learn.

### What is a label in supervised learning?
- [ ] A detail the AI measures, like colour
- [x] The correct answer attached to an example
- [ ] The name of the person who built the model
- [ ] The file size
Why: Labels tell the model what each training example is, such as "ripe", so it can learn to predict them.

### What are features?
- [x] The details the AI uses to make a decision
- [ ] The correct answers attached to each example
- [ ] The extra buttons and settings in an AI app
- [ ] Mistakes in the data
Why: For sorting fruit, colour, shape and size could be features; the model uses them to decide.

### Why use separate test data?
- [ ] Because test data is cheaper to collect than training data
- [x] To check it works on examples it hasn't seen
- [ ] To give the model extra examples to train on
- [ ] To make the model bigger
Why: Like a fair exam, test questions must be new; a model that memorised its training data can still fail.

### What does "garbage in, garbage out" mean?
- [x] Poor or wrong data produces a poor AI
- [ ] AI throws away bad data before it learns
- [ ] Old computers should be recycled, not dumped
- [ ] AI deletes bad files
Why: A model can only be as good as its examples; wrong or messy data teaches it wrong patterns.

### A label is wrong on many training photos. What happens to the AI?
- [ ] It spots the wrong labels and fixes them
- [x] It learns those mistakes too
- [ ] It ignores the photos with wrong labels
- [ ] It stops
Why: The model trusts its labels completely, so wrong labels teach it wrong answers.

### Why should voice-typing data include many accents?
- [ ] Because more accents make the files smaller
- [x] So it works well for people from every region
- [ ] So that it speaks back in every accent at once
- [ ] Accents don't matter
Why: If the data has only one accent, the AI makes more mistakes for people who speak differently.

### Which is the best training data for a banana-ripeness AI?
- [ ] Thousands of photos from one shop, taken at noon
- [x] Many varied photos, all correctly labelled
- [ ] One very clear, high-quality close-up photo
- [ ] Photos of mangoes
Why: Varied, correctly labelled examples prepare the model for different light, phones and shops in real life.

### Who often labels training data?
- [ ] The AI itself, which always knows the answer
- [x] People who check examples and record the answer
- [ ] Nobody; the labels appear in the data automatically
- [ ] The camera
Why: Human labellers are a big part of building AI, so their care and accuracy shape how good the model is.

### More data always fixes AI. True or false?
- [ ] True; adding any extra data always makes it more accurate
- [x] False; it must also be varied and correctly labelled
- [ ] True, as long as it is stored in the cloud
- [ ] False; AI doesn't use data
Why: Lots of bad or one-sided data can make a model worse; quality and variety matter as much as amount.
