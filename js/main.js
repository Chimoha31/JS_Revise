'use strict';

function a() {
  console.log('This is test');
}

function b() {
  a();
}

function c() {
  b();
}

c();

