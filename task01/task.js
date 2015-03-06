/**
 * What’s the result of executing this code and why?
 */

function test1() {
    console.log(a);
    console.log(foo());

    var a = 10;
    function foo() {
        return 10;
    }
}

// Uncomment the line bellow to check the answer
//test1();


/**
 * And this one?
 */

function test2() {

    var a = 020;

    console.log(a);
    console.log(foo());

    var foo = function() {
        return 20;
    };
}

// Uncomment the line bellow to check the answer
//test2();


/**
 * One more...
 */


function test3() {

    var a = {value: 30};

    var b = a;

    b.value = 40;

    console.log(a.value);
    console.log(b.value);

    console.log(bar());

    var foo = function bar() {
        return 30;
    };

    console.log(bar());
}

// Uncomment the line bellow to check the answer
//test3();
