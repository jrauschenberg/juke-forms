juke.controller('TestCtrl', function ($scope, $rootScope, PlayerFactory) {


$scope.toFrequency = function (str) {
    str = str || '';
    return str.split('').reduce(function (freq, char) {
        char = char.toLowerCase();
        freq[char] = (freq[char] || 0);
        freq[char]++;
        return freq;
    }, {});
};
$scope.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

});