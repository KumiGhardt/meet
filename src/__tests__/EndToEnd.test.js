import puppeteer from "puppeteer";

describe('show/hide an event details', () => {

    let browser;
    let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .show-hide-btn');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .show-hide-btn');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });
});

<<<<<<< HEAD
=======
// describe('filter events by city', () => {

//   let browser;
//     let page;
//   beforeAll(async () => {
//     jest.setTimeout(30000);
//     browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 250 // slow down by 250ms
//     });
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000/');
//     await page.waitForSelector('.city');
//     await page.type('#mytextarea', ' ', {delay: 100});
//   });

//   afterAll(() => {
//     browser.close();
//   });

//   test('User can click on the city field to show suggestions', async () => {
//     const citySearch = await page.$('.city');
//     expect(citySearch).toBeDefined();
    
//   });

//   test('User can type a letter to show city options', async () => {
   
//   });

//   test('User can click on the desired city from list', async () => {
    
//   });

//   test('on click in field, user can select all cities and they render', async () => {
    
//   });



// })
>>>>>>> continuous-delivery
