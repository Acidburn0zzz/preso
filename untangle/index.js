{{{ // ◔_◔
  function print(arg) {
    console.dir(arg, {depth: null, colors: true})
  }
  function format() {}
}}}

{{{ // I can do this






    // Untangle Your Code With yield
    //
    // Staś Małolepszy, @stas






}}}
{{{ // Hello, Front Trends!




    function* hello() {
      yield 'Hello';
      yield 'Front';
      yield 'Trends';
      yield '!';
    }





}}}
{{{ // print()





    for (const part of hello()) {
      // print(part);
    }

    // https://github.com/stasm/preso/





}}}
{{{ // format()




  format(
    "It's { date | toWeekDay | toUpper } " +
    "and we're in { city }.",
    { date: new Date(), city: 'Warsaw' }
  );

  // → "It's WEDNESDAY and we're in Warsaw."




}}}

{{{ // for-of





  const abc = ['a', 'b', 'c'];

  for (const elem of abc) {
    // print(elem);
  }





}}}
{{{ // spread






  const abc = ['a', 'b', 'c'];

  // console.log(...abc);






}}}
{{{ // Symbol.iterator


  Array.prototype[Symbol.iterator]
    = function*() { 

    for (let i = 0; i < this.length; i++) {
      yield this[i];
    }
  }

  for (const elem of ['a', 'b', 'c']) {
    // print(elem);
  }


}}}

{{{ // TupleArray

  class TupleArray extends Array {
    *[Symbol.iterator]() {
      for (let i = 0; i < this.length; i++) {
        yield [i, this[i]];
      }
    }
  }

  const abc = new TupleArray('a', 'b', 'c');

  for (const elem of abc) {
    // print(elem);
  }

}}}
{{{ // LuckyArray

  class LuckyArray extends Array {
    *[Symbol.iterator]() {
      for (let i = 0; i < this.length; i++) {
        const rand = Math.floor(
          Math.random() * this.length
        );
        yield this[rand];
      }
    }
  }

  const abc = new LuckyArray('a', 'b', 'c');

  for (const elem of abc) {
    // print(elem);
  }

}}}
{{{ // Range

  class Range {
    constructor(max) {
      this.max = max;
    }
    *[Symbol.iterator]() {
      let i = 0;
      while (i < this.max) {
        yield i++;
      }
    }
  }

  const r = new Range(4);

  for (const i of r) {
    // print(i);
  }

  // console.log(...r);

}}}
{{{ // Number


  Number.prototype[Symbol.iterator]
    = function*() {

    let i = 0;
    while (i < this) {
      yield i++;
    }
  }

  // console.log(...5);



}}}
{{{ // Words

  class Words {
    constructor(str) {
      this.str = str;
    }
    *[Symbol.iterator]() {
      const re = /\w+/g;
      let match;
      while (match = re.exec(this.str)) {
        yield match[0];
      }
    }
  }

  const hello = new Words('hello world');

  for (const word of hello) {
    // print(word);
  }

}}}

{{{ // iter





  const abc = ['a', 'b', 'c'];

  const iter = abc[Symbol.iterator]();

  // print(iter);
  // print(iter.next());





}}}
{{{ // for…of under the hood



  function forof(iterable, fn) {
    const iter = iterable[Symbol.iterator]();
    let result = iter.next();
    while (!result.done) {
      const value = result.value;
      fn(value);
      result = iter.next();
    }
  }

  // forof(['a', 'b', 'c'], print);


}}}
{{{ // explicit generator

  class MyArray extends Array {
    [Symbol.iterator]() {
      const self = this;
      let i = 0;
      return {
        next() {
          return i < self.length ?
            {value: self[i++], done: false} :
            {value: undefined, done: true};
        }
      };
    }
  }

  const abc = new MyArray('d', 'e', 'f');

  for (const elem of abc) {
    // print(elem);
  }

}}}

{{{



   


  // Iterables implement [Symbol.iterator]()
  // Iterators implement next() and throw()







}}}
{{{


  //  ┌───────────┐
  //  │ … [S.i] … │───── an iterable
  //  └───────────┘
  //        ▼
  // ┌─────────────┐
  // │ next, throw │──── an iterator
  // └─────────────┘
  //        ▼
  // ┌─────────────┐
  // │ value, done │
  // └─────────────┘


}}}

{{{ // letters



  function* letters() { 
    yield 'a';
    yield 'b';
  }

  const iter = letters();
  // print(iter.next());
  // print(iter.next());
  // print(iter.next());



}}}
{{{ // integers


  function* integers() {
    let i = 0;

    while (true) {
      yield i++;
    }
  }

  const iter = integers();
  // print(iter.next());
  // print(iter.next());


}}}
{{{ // fib

  function* fib() {
    let [a, b] = [0, 1];

    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  for (const num of fib()) {
    if (num > 10) break;
    // print(num);
  }

}}}

{{{



  function* add() {
    const a = yield 1;
    const b = yield 2;
    return a + b;
  }

  const adder = add();
  // print(adder.next());
  // print(adder.next(4));
  // print(adder.next(5));


}}}
{{{
//
//
//
//
// adder = add();     
//                    function* add() {
//
//
//
//                    }
//
//
//
//
//
}}}
{{{
//
//
//
//
// adder = add();     
// adder.next()       function* add() {
//                                yield 1;
//
//
//                    }
//
//
//
//
//
}}}
{{{
//
//
//
//
// adder = add();
// adder.next();      function* add() {
// adder.next(4);       const a = yield 1;
//                                yield 2;
//
//                    }
//
//
//
//
//
}}}
{{{
//
//
//
//
// adder = add();     
// adder.next();      function* add() {
// adder.next(4);       const a = yield 1;
// adder.next(5);       const b = yield 2;
//                      return a + b;
//                    }
//
//
//
//
//
}}}
{{{ // addresult


  function* addresult() {
    const a = yield {result: 1};
    const b = yield {result: 2};
    return a + b;
  }

  const adder = addresult();
  const {value: A} = adder.next();
  const {value: B} = adder.next(A.result);
  const {value} = adder.next(B.result);
  // print(value);


}}}
{{{ // what happened?





  // yield wrapper1 then
  //   inject result1 into `a` and
  //   yield wrapper2 then  
  //     inject result2 into `b` and
  //     return a + b





}}}
{{{ // chain of then



   const sum =
     Promise.resolve(1).then(
       a => Promise.resolve(2).then(
         b => a + b
       )
     );

   // sum.then(print);




}}}
{{{ wield

  function wield(iter) {
    function step(val) {
      const {value, done} = iter.next(val);
      return done ?
        value : value.then(step);
    };

    return step();
  }

  const sum = wield(function* () {
    const a = yield Promise.resolve(3);
    const b = yield Promise.resolve(4);
    return a + b;
  }());

  // sum.then(print);

}}}
{{{ // async/await




  // const sum = async function() {
  //   const a = await Promise.resolve(1);
  //   const b = await Promise.resolve(2);
  //   return a + b;
  // }());
  //
  // sum.then(print);




}}}

{{{ // format()





  format(
    "It's {date | toWeekDay | toUpper} " +
    "and we're in {city}.",
    { date: new Date(), city: 'Warsaw' }
  );





}}}
{{{ // conclusions!






    // unwrap the wrappers
    // cross the event loop boundary
    // make things disappear and reappear






}}}

{{{ // support





  //   Firefox   ✓
  //   Chrome    ✓
  //   Edge    13+
  //   Safari   TP
  //   Node.js  6+





}}}
{{{ // we did it!







    // @stas







}}}
