$(function() {
    let totalOld = $('#totalOld'),
        firstOld = $('#firstOld'),
        secondOld = $('#secondOld'),
        thirdOld = $('#thirdOld'),
        totalNow = $('#totalNow'),
        firstNow = $('#firstNow'),
        secondNow = $('#secondNow'),
        thirdNow = $('#thirdNow'),
        monthKW = $('#monthKW'),
        firstKW = $('#firstKW'),
        secondKW = $('#secondKW'),
        thirdKW = $('#thirdKW'),
        totalMoney = $('#totalMoney'),
        firstMoney = $('#firstMoney'),
        secondMoney = $('#secondMoney'),
        thirdMoney = $('#thirdMoney'),
        // Form controls
        totalNewInput = $('#totalNewInput'),
        firstNewInput = $('#firstNewInput'),
        secondNewInput = $('#secondNewInput'),
        thirdNewInput = $('#thirdNewInput'),
        submitBtn = $('button[type="submit"]');   

    // Placeholders
    totalNewInput.attr({
        "placeholder": "Старые: " + totalNow.text() + " кВт·ч"
    });
    firstNewInput.attr({
        "placeholder": "Старые: " + firstNow.text() + " кВт·ч"
    });
    secondNewInput.attr({
        "placeholder": "Старые: " + secondNow.text() + " кВт·ч"
    });
    thirdNewInput.attr({
        "placeholder": "Старые: " + thirdNow.text() + " кВт·ч"
    });
});


