'use strict';
//on success of shufflebutton, ui updates
const shuffleSuccess = (arr) => {
$('.one').html(arr[0]).css("color", "white");
$('.two').html(arr[1]).css("color", "white");
$('.three').html(arr[2]).css("color", "white");
$('.four').html(arr[3]).css("color", "white");
$('.five').html(arr[4]).css("color", "white");
$('.six').html(arr[5]).css("color", "white");
$('.seven').html(arr[6]).css("color", "white");
$('.eight').html(arr[7]).css("color", "white");
$('.nine').html(arr[8]).css("color", "white");
$('.ten').html(arr[9]).css("color", "white");
}

// jQuery .then was not working do to Promises not being returned so short
// solution to seperate functions
var shuffleClass = function(){
  if ($('.one').html() < 10) {
    $('.one').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.one').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.one').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.one').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.one').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.one').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.one').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.one').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.one').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.one').addClass('ninetyToHundo')
  } else {
    console.log("NaN1");
  }
};
 var shuffleClass2 = function(){
  if ($('.two').html() < 10) {
    $('.two').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.two').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.two').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.two').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.two').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.two').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.two').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.two').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.two').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.two').addClass('ninetyToHundo')
  } else {
    console.log("NaN2");
  }
};
 var shuffleClass3 = function(){
  if ($('.three').html() < 10) {
    $('.three').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.three').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.three').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.three').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.three').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.three').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.three').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.three').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.three').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.three').addClass('ninetyToHundo')
  } else {
    console.log("NaN3");
  }
};
var shuffleClass4 = function(){
  if ($('.four').html() < 10) {
    $('.four').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.four').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.four').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.four').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.four').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.four').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.four').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.four').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.four').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.four').addClass('ninetyToHundo')
  } else {
    console.log("NaN4");
  }
};
var shuffleClass5 = function(){
  if ($('.five').html() < 10) {
    $('.five').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.five').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.five').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.five').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.five').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.five').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.five').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.five').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.five').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.five').addClass('ninetyToHundo')
  } else {
    console.log("NaN5");
  }
};
var shuffleClass6 = function(){
  if ($('.six').html() < 10) {
    $('.six').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.six').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.six').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.six').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.six').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.six').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.six').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.six').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.six').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.six').addClass('ninetyToHundo')
  } else {
    console.log("NaN6");
  }
};
var shuffleClass7 = function(){
  if ($('.seven').html() < 10) {
    $('.seven').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.seven').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.seven').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.seven').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.seven').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.seven').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.seven').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.seven').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.seven').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.seven').addClass('ninetyToHundo')
  } else {
    console.log("NaN7");
  }
};
var shuffleClass8 = function(){
  if ($('.eight').html() < 10) {
    $('.eight').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.eight').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.eight').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.eight').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.eight').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.eight').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.eight').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.eight').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.eight').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.eight').addClass('ninetyToHundo')
  } else {
    console.log("NaN8");
  }
};
var shuffleClass9 = function(){
  if ($('.nine').html() < 10) {
    $('.nine').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.nine').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.nine').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.nine').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.nine').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.nine').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.nine').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.nine').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.nine').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.nine').addClass('ninetyToHundo')
  } else {
    console.log("NaN9");
  }
};
var shuffleClass10 = function(){
  if ($('.ten').html() < 10) {
    $('.ten').addClass('zeroToTen')
  } else if ($('.one').html() >10 && $('.one').html() < 20) {
    $('.ten').addClass('tenToTwenty')
  } else if ($('.one').html() >20 && $('.one').html() < 30) {
    $('.ten').addClass('twentyToThirty')
  } else if ($('.one').html() >30 && $('.one').html() < 40) {
    $('.ten').addClass('thirtyToForty')
  } else if ($('.one').html() >40 && $('.one').html() < 50) {
    $('.ten').addClass('fortyToFifty')
  } else if ($('.one').html() >50 && $('.one').html() < 60) {
    $('.ten').addClass('fiftyToSixty')
  } else if ($('.one').html() >60 && $('.one').html() < 70) {
    $('.ten').addClass('sixtyToSeventy')
  } else if ($('.one').html() >70 && $('.one').html() < 80) {
    $('.ten').addClass('seventyToEighty')
  } else if ($('.one').html() >80 && $('.one').html() < 90) {
    $('.ten').addClass('eightyToNinety')
  } else if ($('.one').html() >90 && $('.one').html() < 100) {
    $('.ten').addClass('ninetyToHundo')
  } else {
    console.log("NaN10");
  }
};

//sortSuccess receives array from bubStep and parses logic
var sortSuccess = (arr) => {
  console.log("sortSuccess");
  if ($('.one').text() > $('.two').text()) {
    $('.one').html($('.two').text())
  } else if ($('.two').text() > $('.three').text()) {
    $('.two').html($('.three').text())
  } else if ($('.three').text() > $('.four').text()) {
    $('.three').html($('.four').text())
  } else if ($('.four').text() > $('.five').text()) {
    $('.four').html($('.five').text())
  } else if ($('.five').text() > $('.six').text()) {
    $('.five').html($('.six').text())
  } else if ($('.six').text() > $('.seven').text()) {
    $('.six').html($('.seven').text())
  } else if ($('.seven').text() > $('.eight').text()) {
    $('.seven').html($('.eight').text())
  } else if ($('.eight').text() > $('.nine').text()) {
    $('.eight').html($('.nine').text())
  } else if ($('.nine').text() > $('.ten').text()) {
    $('.nine').html($('.ten').text())
  } else {
    alert("sorted!");
  }
};
