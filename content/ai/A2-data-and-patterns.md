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
- [ ] Only electricity
- [ ] Dreams
- [ ] Its own feelings
Why: Patterns in data are where machine learning gets its abilities.

### What is a label in supervised learning?
- [ ] A sticker on the computer
- [x] The correct answer attached to an example
- [ ] The name of the programmer
- [ ] The file size
Why: Labels tell the model what each training example is, so it can learn to predict them.

### What are features?
- [x] The details the AI uses to make a decision
- [ ] The prices of AI apps
- [ ] The buttons on a phone
- [ ] Mistakes in data
Why: Colour, shape and size can be features for sorting fruit, for example.

### Why use separate test data?
- [ ] Training data is too small
- [x] To check the model works on new examples, not just ones it memorised
- [ ] Test data is cheaper
- [ ] It makes the model bigger
Why: Like a fair exam, test data must be new to the learner.

### What does "garbage in, garbage out" mean?
- [ ] AI eats rubbish
- [x] Poor or wrong data produces a poor AI
- [ ] Old computers should be recycled
- [ ] AI deletes bad files
Why: A model can only be as good as the examples it learned from.

### A label is wrong on many training photos. What happens to the AI?
- [ ] Nothing
- [x] It learns those mistakes too
- [ ] It fixes the labels by itself
- [ ] It refuses to train
Why: The model trusts its labels, so wrong labels teach wrong answers.

### Why should voice-typing data include many accents?
- [ ] To make files bigger
- [x] So it works well for people from different regions, not just one
- [ ] Accents don't matter to AI
- [ ] To slow it down
Why: If the data only has one accent, people with other accents get more mistakes.

### Which is the best training data for a banana-ripeness AI?
- [ ] 10 photos from one shop at noon
- [x] Many photos from different shops, times of day and phones, correctly labelled
- [ ] One very clear photo
- [ ] Photos of mangoes
Why: Varied, correctly labelled examples help the model handle real-world situations.

### Who often labels training data?
- [ ] The AI itself, always
- [x] People, who look at examples and record the right answer
- [ ] Nobody; labels appear automatically
- [ ] Only robots
Why: Human labellers are a big part of building AI, which is why their accuracy matters.

### More data always fixes AI. True or false?
- [ ] True, any data helps
- [x] False; the data must also be relevant, varied and correctly labelled
- [ ] True, if it is stored in the cloud
- [ ] False; AI doesn't use data
Why: Lots of bad or one-sided data can make a model worse, not better.
