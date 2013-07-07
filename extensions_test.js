//Written by Tadesse D. Feyissa. July 7, 2013.

//Qunit unit test for Array, Object and String extension methods

test("reduce-1 unit test", function() {
 
    ok(
        [5,7,1,-1,7,-4,8.3].reduce(function(prev, cur){
            return (prev + cur); 
        }
    ) == 23.3, "Passed!" );
      
  });
    
 //////////////////////////
 
 test("reduce-2 unit test", function() {
 
    ok(
        [5,8.3].reduce(function(prev, cur){
            return (prev + cur); 
        }
    ) == 13.3, "Passed!" );
      
  });
       
 //////////////////////////
 
 test("reduce-3 unit test", function() {
   
    ok(
        [5].reduce(function(prev, cur){
            return (prev + cur); 
        }
    ) == 5, "Passed!" );
      
  });
    
 //////////////////////////
 
  test("reduceRight-1 unit test", function() {
 
    ok(
        [5,7,1,-1,7,-4,8.3].reduceRight(function(prev, cur){
            return (prev + cur); 
        }
    ) == 23.3, "Passed!" );
      
  });
  
  //////////////////////////
 
 test("reduceRight-2 unit test", function() {
 
    ok(
        [5,8.3].reduceRight(function(prev, cur){
            return (prev + cur); 
        }
    ) == 13.3, "Passed!" );
      
  });
       
 //////////////////////////
 
 test("reduceRight-3 unit test", function() {
 
    ok(
        [5].reduceRight(function(prev, cur){
            return (prev + cur); 
        }
    ) == 5, "Passed!" );
      
  });
    
  ////////////////////////

  test("where unit test", function() {
 
    deepEqual(
        [5,2,1,-1,7,-4,8.3].where(function(v){
            return v % 2 == 0; 
        }
    ), [2, -4], "Passed!" );
      
  });
  
  ////////////////////////

  test("groupBy-1 unit test", function() {
 
    deepEqual(
          [5,2,1,-1,7,-4,8,-8,8.3,-5].groupBy(function(v){
              return Math.abs(parseInt(v)); 
          }
    ), {5:[5,-5],2:[2],1:[1,-1],7:[7],4:[-4],8:[8,-8,8.3]}, "Passed!" );
      
  });
  
  ////////////////////////

  test("groupBy-2 unit test", function() {
 
    deepEqual(
          [{name: 'John', city: 'Seattle'}, {name: 'Arun', city: 'DC'}, {name: 'Scott', city: 'San Francisco'}, {name: 'Mike', city: 'Seattle'}].groupBy(function(v){
              return v.city; 
          }
    ), {'Seattle':[{name: 'John', city: 'Seattle'}, {name: 'Mike', city: 'Seattle'}], 'DC':[{name: 'Arun', city: 'DC'}], 'San Francisco':[{name: 'Scott', city: 'San Francisco'}]}, "Passed!" );
      
  });
  
  ////////////////////////

  test("contains-1 unit test", function() {
 
    equal([5,2,1,-1,7,-4,8,-8,8.3,-5].contains(-1), 3, "Passed!" );
      
  });
  
  ////////////////////////

  test("contains-2 unit test", function() {
 
    equal([5,2,1,-1,7,-4,8,-8,8.3,-5].contains(-91), -1, "Passed!" );
      
  });
  
  ////////////////////////

  test("contains-3 unit test", function() {
 
    equal([5,2,1,-1,7,-4,8,-8,8.3,-5].contains([2,1,1,-4,0,8.3]), false, "Passed!" );
      
  });
  
  ////////////////////////

  test("contains-4 unit test", function() {
 
    equal([5,2,1,-1,7,-4,8,-8,8.3,-5].contains([2,1,1,-4,8.3]), true, "Passed!" );
      
  });
  
  ////////////////////////

  test("each unit test", function() {
    var items = [];
    [5,2,1,-1,7,-4,8,-8,8.3,-5].each(function(v){
        items.push(v);
    });
    
    deepEqual(items, [5,2,1,-1,7,-4,8,-8,8.3,-5], "Passed!" );
      
  });
  
  ////////////////////////

  test("map unit test", function() {
    
    deepEqual([5,1,-1,-8,8.3,-5].map(function(v){ return 'item ' + v }), ['item 5','item 1','item -1','item -8','item 8.3','item -5'], "Passed!" );
      
  });
  
  ////////////////////////

  test("pluck unit test", function() {
    
    var items =
      [
          1,
          {name: 'test1', key: 1, address: ''},
          {name: 'test2', key: 2, address: 'Seattle 8th St'},
          {name: 'test3', key: 4, address: 'Bellevue 73rd St'},
          {name: 'test4', key: 6, address: ''},
          {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
      ].pluck(['address', 'name']);

    var vals = 
      [
          {name: 'test1'},
          {name: 'test2', address: 'Seattle 8th St'},
          {name: 'test3', address: 'Bellevue 73rd St'},
          {name: 'test4'},
          {name: 'test5', address: 'Edmonds 4th Ave'}
      ];

    deepEqual(items, vals, "Passed!");
      
  });
  
   ////////////////////////

  test("elementAt unit test", function() {
    
    var item =
        [
            {name: 'test1', key: 1, address: ''},
            {name: 'test2', key: 2, address: 'Seattle 8th St'},
            {name: 'test3', key: 4, address: 'Bellevue 73rd St'},
            {name: 'test4', key: 6, address: ''},
            {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
        ].elementAt(1);

    deepEqual(item, {name: 'test2', key: 2, address: 'Seattle 8th St'}, "Passed!");
      
  });

  ////////////////////////

  test("elementAtOrNull-1 unit test", function() {
    
    var item =
        [
            {name: 'test1', key: 1, address: ''},
            {name: 'test2', key: 2, address: 'Seattle 8th St'},
            {name: 'test3', key: 4, address: 'Bellevue 73rd St'},
            {name: 'test4', key: 6, address: ''},
            {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
        ].elementAtOrNull(0);

    deepEqual(item, {name: 'test1', key: 1, address: ''}, "Passed!");
      
  });

  ////////////////////////

  test("elementAtOrNull-2 unit test", function() {
    
    var item =
        [
            {name: 'test1', key: 1, address: ''},
            {name: 'test2', key: 2, address: 'Seattle 8th St'},
            {name: 'test3', key: 4, address: 'Bellevue 73rd St'},
            {name: 'test4', key: 6, address: ''},
            {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
        ].elementAtOrNull(10);

    deepEqual(item, null, "Passed!");
      
  });
  
  ////////////////////////

  test("removeAt unit test", function() {
    
    var items =[1,3,4,5,8,5];
        
    items.removeAt(4);

    deepEqual(items, [ 1,3,4,5,5 ], "Passed!");
      
  });
  
  ////////////////////////

  test("first unit test", function() {
    
    var items =
        [
            {name: 'test1', key: 1, address: ''},
            {name: 'test2', key: 2, address: 'Seattle 8th St'},
            {name: 'test3', key: 4, address: 'Bellevue 73rd St'},
            {name: 'test4', key: 6, address: ''},
            {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
        ].first();

    deepEqual(items, {name: 'test1', key: 1, address: ''}, "Passed!");
      
  });
  
  ////////////////////////

  test("last unit test", function() {
    
    var items =
        [
            {name: 'test1', key: 1, address: ''},
            {name: 'test2', key: 2, address: 'Seattle 8th St'},
            {name: 'test3', key: 4, address: 'Bellevue 73rd St'},
            {name: 'test4', key: 6, address: ''},
            {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
        ].last();

    deepEqual(items, {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}, "Passed!");
      
  });
  
  ////////////////////////

  test("firstN unit test", function() {
    
    var items =
        [
            {name: 'test1', key: 1, address: ''},
            {name: 'test2', key: 2, address: 'Seattle 8th St'},
            {name: 'test3', key: 4, address: 'Bellevue 73rd St'},
            {name: 'test4', key: 6, address: ''},
            {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
        ].firstN(3);

    deepEqual(items, 
      [
        {name: 'test1', key: 1, address: ''},
        {name: 'test2', key: 2, address: 'Seattle 8th St'},
        {name: 'test3', key: 4, address: 'Bellevue 73rd St'}
      ],     
      "Passed!");
      
  });
  
  ////////////////////////

  test("lastN unit test", function() {
    
    var items =
        [
            {name: 'test1', key: 1, address: ''},
            {name: 'test2', key: 2, address: 'Seattle 8th St'},
            {name: 'test3', key: 4, address: 'Bellevue 73rd St'},
            {name: 'test4', key: 6, address: ''},
            {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
        ].lastN(2);

    deepEqual(items, 
      [
        {name: 'test4', key: 6, address: ''},
        {name: 'test5', key: 7, address: 'Edmonds 4th Ave'}
      ], 
      "Passed!");
      
  });
  
  ////////////////////////

  test("distinct-1 unit test", function() {
    
      deepEqual([3,5,12,2,3,1,5,7,9.9].distinct(),[3,5,12,2,1,7,9.9],"Passed!");
      
  });
  
 ////////////////////////

  test("distinct-2 unit test", function() {
      var d = new Date();
      deepEqual(['test',5,12,2,3,1,'5',7,9.9, ' 5',d].distinct(),['test',5,12,2,3,1,'5',7,9.9,' 5',d],"Passed!");
      
  });
  
  ////////////////////////

  test("min unit test", function() {
    
    equal([5,3,03,-23,66.76,-455.4].min(), -455.4, "Passed!");
      
  }); 
  
  ////////////////////////

  test("max unit test", function() {
    
    equal([5,3,03,-23,66.76,-455.4].max(), 66.76, "Passed!");
      
  }); 
  
  ///////////////////////

  test("merge unit test", function() {
   
    deepEqual(
      [1,2,4,2,5,8].merge(['one','two','three','ten','yellow','green','5th street', 'bac'],
            function(left, right) { 
                    var t = {}; 
                    t[left] = right;  
                    return t;
                }
      ), 
      [{1: 'one'},{2:'two'},{4:'three'},{2:'ten'},{5:'yellow'},{8:'green'}], 
      "Passed!"
    );
      
  }); 
  
  ////////////////////////

  test("intersect unit test", function() {
    
    deepEqual([1,2,4,2,5,8,3,4,6,78,7,8,8,9].intersect([5,8,8,1,3,0]), [1,5,8,3], "Passed!");
      
  }); 
  
  ////////////////////////

  test("union-1 unit test", function() {
    
    deepEqual([1,2,4,2,5,8,3,4,6,78,7,8,8,9].union([5,8,8,1,3,0]), [1,2,4,5,8,3,6,78,7,9,0], "Passed!");
    
  }); 
  
  ////////////////////////

  test("union-2 unit test", function() {
    
    deepEqual([1,2,4,2,5,8,3,4,6,78,7,8,8,9].union(null), [1,2,4,5,8,3,6,78,7,9], "Passed!");
    
  }); 
  
  ////////////////////////

  test("union-3 unit test", function() {
    
    deepEqual([1,2,4,2,5,8,3,4,6,78,7,8,8,9].union([]), [1,2,4,5,8,3,6,78,7,9], "Passed!");
    
  }); 
  
  ////////////////////////

  test("randomize unit test", function() {
    
    var r0 = [1,2,4,2,5,8,3,4,6,78,7,8,8,9];
    var r1 = [1,2,4,2,5,8,3,4,6,78,7,8,8,9];
    notDeepEqual(r0.randomize(), r1, "Passed!");
    
  }); 
  
  
  
  ////////////////////////

  test("randomize-4 unit test", function() {
   
    var r0 = [1,2,4,2,5,8,3,4,6,78,7,8,8,9];
    deepEqual(r0.intersect(r0.randomize()), r0.distinct(), "Passed!");
    
  }); 
  
   ////////////////////////

  test("chaining unit test", function() {
    
      var items = [
          {count: 5, weight: 3.1}, {count: 6, weight: 5.3}, 
          {count: 7, weight: 23.1}, {count: 2, weight: 9.1}, 
          {count: 8, weight: 23.1}, {count: -1, weight: 23.1}, 
          {count: 23, weight: 11.1}, {count: 0, weight: 7}
        ];

      var fnCountIsPositive = function(v) { return v.count > 0};
      var fnWeightIndex = function(v) { return Math.round(Math.abs(v.count * v.weight)*100)/100; };

      var result = items.where(fnCountIsPositive).map(fnWeightIndex);
    
      deepEqual(result, [15.5, 31.8, 161.7, 18.2, 184.8, 255.3], "Passed!");
      
      var result1 = items.where(function(v) { return v.count % 2 == 0})
                         .reduce(function(p,c){ return p - c.count }, 10);
                         
      equal(result1, -6, "Passed!");
  }); 

  ////////////////////////

  /*test("String.trim() 0 unit test", function() {
   
    var str = 'tttrtestotttt';
    equal(str.trim('t'), 'rtesto', "Passed!");
    
  });*/ 
  
  ////////////////////////

  test("String.trim() 1 unit test", function() {
   
    var str = 'tttrtestotttt';
    equal(str.trim('4'), str, "Passed!");
    
  }); 
  
  ////////////////////////

  test("String.trim() 2 unit test", function() {
   
    var str = '   rtestot ';
    equal(str.trim(), 'rtestot', "Passed!");
    
  }); 
  
  ////////////////////////

  test("String.format() 1 unit test", function() {
   
     var str = '{0}://{1}.com/{2}/index.htm?key={3}&domain={1}';
     equal(str.format('ftp','xyx','images',11), 'ftp://xyx.com/images/index.htm?key=11&domain=xyx', "Passed!");
    
  }); 
  
  ////////////////////////

  test("String.format() 2 unit test", function() {
   
     equal(''.format('ftp','xyx','images',11), '', "Passed!");
    
  }); 
  
  ////////////////////////

  test("String.format() 3 unit test", function() {
   
     equal('abc'.format('ftp',11), 'abc', "Passed!");
    
  }); 
  
  ////////////////////////

  test("Object.keys() 1 unit test", function() {
     
    deepEqual({id:3, name:'john',dob:'23/12/1988'}.keys(), ['id', 'name', 'dob'], "Passed!");
  
  }); 
  
  ////////////////////////

  test("Object.keys() 2 unit test", function() {
     
    deepEqual({}.keys(), [], "Passed!");
  
  }); 
  