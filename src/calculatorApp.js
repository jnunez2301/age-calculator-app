/*
Year has to be 4 digits
Month has to be 2 digits
Day has to be 2 digits

So first i have to get how many days i have.

So 1 month equals 30 days,
and a year is 365 days.


*/
function ageCalculator(day, month, year){
    /* get the sum of days */
    const daysYear = 365;
    const daysMonth = 30;
    const date = new Date().getFullYear();
    const yearValue= date - year;
    let sum = 0;
    sum = (day + (month*daysMonth) + (yearValue*daysYear))/365;
    
    return sum;
}

console.log(ageCalculator(24, 09, 1984));
/*
<script type="text/javascript">
  $(document).ready(function() {
    $("#myButton").on('click', (function() {
      $("#myForm").submit();
    });
});
</script>
*/
