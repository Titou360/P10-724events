import { getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        // implement the test here to confirm the January month
        it("the function return janvier for 2022-01-01 as date", () => {
                  const date = new Date('2022-01-01');
                  const month = getMonth(date);
                  expect(month).toBe('janvier');
        });
        it("the function return december for 2022-12-08 as date", () => {
            // implement the test here to confirm the decembrer month
                  const date = new Date('2022-12-08');
                  const month = getMonth(date);
                  expect(month).toBe('décembre');
        });
    });
})

// you can add or modify the test just with a copied & past and modify date and month number & name

