---
title: "Diabetes Prediction Using Machine Learning"
layout: post
date: 2019-12-05 16:00
image: /assets/images/markdown.jpg
headerImage: false
tag:
- Diabetes
- Machine Learning
category: blog
author: abdullaz
description: Diabetes is a metabolic disorder that occurs when your blood sugar is too high it also called "hyperglycemia".
---

## Introduction

For many years diabetes was a mystery, no one had an absolute answer for the reasons or any early signs, we are looking to discover a new method to predict the diabetes and learn how to process datasets using different methods of machine learning.

There are diabetes warning signs and symptoms that both women and men have in common, based on recent dataset of diabetes taken from different sources, we are going to predict the diabetes for any data.

## Methods

In this project we used the following methods:

### Decision Tree

Decision tree is the most powerful and popular tool for classification and prediction. A Decision tree is a flowchart like tree structure, where each internal node denotes a test on an attribute, each branch represents an outcome of the test, and each leaf node (terminal node) holds a class label.

#### Pre-processing data

We have imputed the missing data values using MICE package, MICE package use an algorithm in a such a way that use information from other variables in the dataset to predict and impute the missing values.

![Pre-process](../assets/images/1.png)

#### Applying Decision Tree Method

![decision-tree](../assets/images/2.png)

### Naive Bayes Classifier

Naive Bayes classifier is a supervised machine learning algorithm based on the popular Bayes theorem of probability.
	Naive Bayes classifier is used for binary as well as multi class classification problem especially in the field of document classification, diagnosis of diseases and so on.
	Naive Bayes classifier is a probabilistic model that is based on the core concepts of Bayes theorem of probability.
	Equation of Bayes Rule as following:
![NB-code](../assets/images/3.png)

#### Pre-processing data

We have imputed the missing data values as the above, using MICE package.
![Pre-process](../assets/images/1.png)

#### Applying Naive Bayes Classifier Method

![naive-bayes](../assets/images/4.png)