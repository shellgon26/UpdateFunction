describe("FillTests", function() {
    var progresslist = {'progress': []}
    contentlist=[]
  // test 1 - given an empty list, returns an empty list
  it("returns [] when given []", function() {
      expect(filllist(contentlist,progresslist)).toEqual(progresslist);
  });

  // test 2 - given a list of content, returns a list of content with a colour of none
    progresslist = {'progress': []}
    fullcontentlist = [3, 4, 5, 6]
    resultlist = { 'progress': [{ contentid: 3, colour: 'none' }, { contentid: 4, colour: 'none' }, { contentid: 5, colour: 'none' }, {contentid:6,colour: 'none'}]}
    it("returns resultlist (of 4) when given contentlist (of 4)", function () {
        expect(filllist(fullcontentlist, progresslist)).toEqual(resultlist);
    });
});

describe("UpdateTests", function () {
    testcontentlist = [3, 4, 5, 6]
    testlist = {'progress': [{ contentid: 3, colour: 'none' }, { contentid: 4, colour: 'none' }, { contentid: 5, colour: 'none' }, { contentid: 6, colour: 'none' }]}
//test  1 - given a valid colour and id, returns status code 0
    it("returns 0 given a valid colour and id", function () {
        expect(update(fullcontentlist, testlist, "green", 4)).toEqual(0);
    });
//test 2 - given an invalid colour but valid id, returns status code 1
    it("returns 1 given an invalid colour but  valid id", function () {
        expect(update(fullcontentlist, testlist, "blue", 4)).toEqual(1);
    });
//test 3 - given a valid colour but invalid id, returns status code 2
    it("returns 2 given a valid colour but invalid id", function () {
        expect(update(fullcontentlist, testlist, "green", 56)).toEqual(2);
    });
//test 4 - given an invalid colour and id, returns status code 2
    it("returns 0 given an invalid colour and id", function () {
        expect(update(fullcontentlist, testlist, "blue", 56)).toEqual(2);
    });
})