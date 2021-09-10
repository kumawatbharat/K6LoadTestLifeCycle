import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '10s'
}

// it is called "init code", and is run only once per VU
console.log('This is init code');

// setup are only called once for a test
export function setup(){
  console.log('setup code')
}

// teardown are only called once for a test
export function teardown(){
  console.log('teardown code')
}

// Code inside default is called "VU code", and is run over and over for as 
// long as the test is running
export default function() {
  console.log('default function')
  sleep(1)
}