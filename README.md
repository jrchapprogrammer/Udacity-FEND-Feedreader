# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they'd already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and I was left with an application with an incomplete test suite. That's where I started.

## How to run app

To run this app, type
`git clone https://github.com/jrchapprogrammer/Udacity-FEND-Feedreader.git`
in your code editor or download from the download button in this repo. You can also [click on the live page](https://jrchapprogrammer.github.io/Udacity-FEND-Feedreader/) to see it in your browser.

## Test Conditions

### RSS Feeds

1. Test that each feed has a URL defined _and_ that the URL is not empty

2. Test that each feed has a name defined and that the name is not empty

### The Menu

1. Test that the menu is hidden by default

2. Test that the menu changes visibility when the menu icon is clicked.

### Initial Entries

1. Test that when a feed is loaded, there is at least a single feed entry within the selected feed category.

### New Feed Selection

1. Test that when a new feed is loaded, the content actually changes

## Dependencies

The testing library used was [Jasmine](http://jasmine.github.io).

All starter code was provided by Udacity, for the Front End Nanodegree.

Code implementations in the `feedreader.js` file were provided by me.
