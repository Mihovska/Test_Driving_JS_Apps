var expect = require('chai').expect;
var linesCount = require('../src/files');

describe('test server-side callback', function(){
    it('should return correct lines count for a valid file', function(done){
        var callback = function(count){
            expect(count).to.be.eql(16);
            done();
        };
        linesCount('src/files.js', callback);
    });

    it('should report error for an invalid file name', function(done){
        var cb = function(){
            return null;
        }
        
        var onError = function(error){
            expect(error).to.be.eql('unable to open file src/flies.js');
        };
        done();
        linesCount('src/files.js', cb, onError);
    });
});