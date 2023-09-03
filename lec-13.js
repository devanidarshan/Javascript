// Javascript Date objects

// New Date()

// {
//     const dates = new Date();
//     console.log(dates);
// }

// New Date(date string)

// {
//     const dates = new Date("2023-07-14");
//     console.log(dates);
// }

// New Date(year,month)

// {
//     const dates = new Date(2023,3);
//     console.log(dates);
// }

// New Date(year,month,day)

// {
//     const dates = new Date(2023,3,15);
//     console.log(dates);
// }

// New Date(year,month,day,hour)

// {
//     const dates = new Date(2023,3,16,16);
//     console.log(dates);
// }

// New Date(year,month,day,hour,minutes)

// {
//     const dates = new Date(2023,3,16,6,15);
//     console.log(dates);
// }

// New Date(year,month,day,hour,minutes,seconds)

// {
//     const dates = new Date(2023,11,6,6,15,20);
//     console.log(dates);
// }

// New Date(milliseconds)

// {
//     const dates = new Date(2000);
//     console.log(dates);
// }

// Javascript ISO standard time

// {
//     const dates = new Date(2023,3,16,6,15,20);
//     console.log(dates.toString());
//     console.log(dates.toDateString());
//     console.log(dates.toUTCString());
//     console.log(dates.toISOString());
// }

// Javascript Date Formats
// ISO Date , Short Date , Long Date

// {
//     const dates = new Date("2024");
//     console.log(dates);
// }

// ShortDate

// {
//     const dates = new Date("03/25/2023");
//     console.log(dates);
// }

// LongDate

// {
//     const dates = new Date("march 23 2023");
//     console.log(dates);
// }

// {
//     const dates = new Date("23 march 2023");
//     console.log(dates);
// }

// Date Input - Parsing Dates

// {
//     let msec = Date.parse("March 21,2012");
//     console.log(msec);
// }

// Javascript Get Date Methods

// getFullyear() - Get year as a four digit Number (yyyy);
// getmonth() - Get month as a number (0-11)
// getDate() - Get day as a number (1-31)
// getDay() - Get weekday as a number (0-6)
// getHours() - Get hour (0-23)
// getMinutes() - Get minute (0-59)
// getSeconds() - Get second (0-59)
// getMilliseconds() - Get millisecond (0-999)
// getTime() - Get time (milliseconds since january 1,1970)

// {
//    const dates = new Date();
//    console.log(dates);
//    let getyear = dates.getFullYear();
//    let  getmonth = dates.getMonth();
//    let getdate = dates.getDate();
//    let getday = dates.getDay();
//    let gethours = dates.getHours();
//    let getminutes = dates.getMinutes();
//    let getseconds = dates.getSeconds();
//    let getmilliseconds = dates.getMilliseconds();
//    let gettime = dates.getTime();

//    console.log(getyear);
//    console.log(getmonth);
//    console.log(getdate);
//    console.log(getday);
//    console.log(gethours);
//    console.log(getminutes);
//    console.log(getseconds);
//    console.log(getmilliseconds);
//    console.log(gettime);
// }

// Javascript set Date Methods

// setDate() - Set the day as a number (1-31)
// setFullYear() - Set the year (optionally month and day)
// setHours() - Set the hour (0-23)
// setMilliseconds() - Set the milliseconds (0-999)
// setMinutes() - Set the minutes (0-11)
// setMonth() - Set the month (0-11)
// setSeconds() - Set the seconds (0-59)
// setTime() - Set the time (milliseconds since january 1, 1970)

// {
//     const dates = new Date();
//     dates.setFullYear(2020);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMonth(11);
//     console.log(dates);
// }

// {
//       const dates = new Date();
//       dates.setDate(25);
//       console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setHours(12);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMinutes(15);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setSeconds(45);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMilliseconds(10000);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setTime();
//     console.log(dates);
// }


// Javascript number methods

// toString() - Returns a number as a String
// toExponential() - Returns a number written in exponential notation
// toFixed() - Returns a number written with a number of decimals
// toPrecision() - Returns a number written with a specified length
// Valueof() - Returns a number as a number

// toString()

// {
//     const numbers = 150;
//     const number1 = numbers.toString();
//     const number2 = (125+25).toString();
//     const number3 = (150).toString();

//     console.log(number1);
//     console.log(number2);
//     console.log(number3);

//     console.log(typeof(number1));
//     console.log(typeof(number2));
//     console.log(typeof(number3));
// }

// toExponential()

// toExponential() returns a string, with a number rounded and written using exponential notation

// {
//     let a = 2500000
//     let b = a.toExponential();
//     let c = a.toExponential(2);
//     let d = a.toExponential(3);
//     let e = a.toExponential(4);

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
// }

// toFixed()

// {
//     let fix1 = 5.6545
//     let fix2 = fix1.toFixed(1);
//     let fix3 = fix1.toFixed(2);
//     let fix4 = fix1.toFixed(3);
//     let fix5 = fix1.toFixed(4);
//     let fix6 = fix1.toFixed(5);
//     let fix7 = fix1.toFixed(6);

//     console.log(fix1);
//     console.log(fix2);
//     console.log(fix3);
//     console.log(fix4);
//     console.log(fix5);
//     console.log(fix6);
//     console.log(fix7);
// }

// toPrecision()pre

// {
//     let pre1 = 5.6545
//     let pre2 = pre1.toPrecision(1);
//     let pre3 = pre1.toPrecision(2);
//     let pre4 = pre1.toPrecision(3);
//     let pre5 = pre1.toPrecision(4);
//     let pre6 = pre1.toPrecision(5);
//     let pre7 = pre1.toPrecision(6);

//     console.log(pre1);
//     console.log(pre2);
//     console.log(pre3);
//     console.log(pre4);
//     console.log(pre5);
//     console.log(pre6);
//     console.log(pre7);
// }

// Valueof()

// {
//     const numbers = 150;
//     const number1 = numbers.valueOf();
//     const number2 = (125+25).valueOf();
//     const number3 = (150).valueOf();

//     console.log(number1);
//     console.log(number2);
//     console.log(number3);

//     console.log(typeof(number1));
//     console.log(typeof(number2));
//     console.log(typeof(number3));

// }
