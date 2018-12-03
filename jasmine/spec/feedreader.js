/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (() => {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', () => {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it('are defined', () => {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it('URL is defined', () => {
        for (let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url).not.toBe('');
          expect(feed.url).toMatch('http://');
        }
      });

      /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it('name is defined', () => {
        for (let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name).not.toBe('');
          expect(feed.name).toMatch('');
        }
      });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
      let menu = document.querySelector('body'); // Element affected by click handler on menuElement
      let menuElement = document.querySelector('.menu-icon-link'); // Click handler is attached to this element in app.js

      it('menu is hidden by default', () => {
        expect(menu.classList.contains('menu-hidden')).toBe(true);
      });
      /* TODO: Write a test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * should have two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */
      it('menu hides/shows when clicked', () => {
        menuElement.click();
        expect(menu.classList.contains('menu-hidden')).toBe(false); // Visible
        menuElement.click();
        expect(menu.classList.contains('menu-hidden')).toBe(true); // Hidden
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {
      let initEntry = document.querySelector('.feed');

      beforeEach(done => {
        loadFeed(0, () => {
          done();
        });
      });
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
      it('Feed is not empty', done => {
        let entry = document.querySelector('.entry');
        expect(initEntry.contains(entry)).toBe(true);
        done();
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
      let initEntry = document.querySelector('.feed');
      let feedContentBefore, feedContentAfter;

      beforeEach(done => {
        loadFeed(0, () => {
          done();
        });
      });
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      it('content changes when new feed loads', done => {
        feedContentBefore = initEntry.querySelector('a').innerText;
        loadFeed(1, done => {
          feedContentAfter = initEntry.querySelector('a').innerText;
          done();
        });
        expect(feedContentBefore).not.toBe(feedContentAfter);
        done();
      });
    });
  })()
);
